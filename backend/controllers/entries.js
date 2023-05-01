import leaderBoardEntry from "../models/leaderBoardEntry.js";
import { User } from "../models/user.js";
import cloudinary from "../utils/cloudinary.js";

//function for adding an entry to a leaderboard
export const addEntry = async (req, res) => {
  const leaderBoardId = req.body.leaderBoardId;
  const user = req.id;
  const entry = req.body.entry;
  const image = req.body.image;
  const fileSize = req.headers["content-length"];

  //mongoose query to find if the user has a better leaderboard entry already
  //prevents a user at the top of the leaderboard from claiming the entire top
  //ten
  const check = await leaderBoardEntry.findOne({
    leaderBoard: leaderBoardId,
    user: user,
    entry: { $gte: entry }, //greater than or equal to
  });
  if (check) {
    return res
      .status(409)
      .send({ error: "User already has an entry better than this!" });
  }

  try {
    let result;
    if (fileSize >= 10485760) {
      result = await cloudinary.uploader.upload_large(image, {
        folder: "entryProof",
        resource_type: "video",
        chunk_size: 20000000,
      });
      console.log(result);
    } else {
      result = await cloudinary.uploader.upload(image, {
        folder: "entryProof",
        resource_type: "auto",
      });
    }
    const newLeaderBoardEntry = new leaderBoardEntry({
      leaderBoard: leaderBoardId,
      user: user,
      entry: entry,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });
    await newLeaderBoardEntry.save();
    res.status(201).json({
      message: "Successfully added the entry",
      toUpdate: true,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTopTenEntries = async (req, res) => {
  const leaderBoardId = req.query.leaderBoardId;

  try {
    const topTen = await leaderBoardEntry
      .find({ leaderBoard: leaderBoardId })
      .sort({ entry: -1 })
      .limit(10)
      .populate("user");

    res.status(200).json(topTen);
  } catch (error) {
    res.status(401).json({ message: "an error has occured" });
  }
};

export const getUserTopEntry = async (req, res) => {
  const leaderBoardId = req.query.leaderBoardId;
  const user = req.id;

  try {
    const userTopEntry = await leaderBoardEntry
      .findOne({ leaderBoard: leaderBoardId, user: user })
      .sort({ entry: -1 })
      .limit(1)
      .populate("user");
    if (userTopEntry) {
      const numberAbove = await leaderBoardEntry.count({
        leaderBoard: leaderBoardId,
        entry: { $gt: userTopEntry.entry },
      });
      const toReturn = {
        position: numberAbove + 1,
        user: userTopEntry.user.username,
        entry: userTopEntry.entry,
        entryDate: userTopEntry.entryDate,
      };
      res.status(200).json(toReturn);
    } else {
      res.status(409).json({ message: "Need to create an entry first" });
    }
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getUserProgress = async (req, res) => {
  const leaderBoardId = req.query.leaderBoardId;
  const user = req.id;

  try {
    const mostRecent = await leaderBoardEntry
      .findOne({ leaderBoard: leaderBoardId, user: user })
      .sort({ entryDate: -1, entry: 1 })
      .limit(1);

    const secondRecent = await leaderBoardEntry
      .findOne({ leaderBoard: leaderBoardId, user: user })
      .sort({ entryDate: -1, entry: -1 })
      .skip(1)
      .limit(1);

    if (!mostRecent || !secondRecent) {
      return res.status(200).json({
        errorMessage: "You need to have two lifts to see your progress",
      });
    }

    let difference;
    let title;
    let encouragement;
    let differenceMessage;
    if (mostRecent.entry > secondRecent.entry) {
      difference =
        ((mostRecent.entry - secondRecent.entry) / secondRecent.entry) * 100;

      differenceMessage = `Your most recent lift was a ${
        Math.round(difference * 10) / 10
      }% increase over your last lift!`;
      title = "Congratulations!";
      encouragement = "Keep it up!";
    } else if (mostRecent.entry == secondRecent.entry) {
      difference = 0;
      differenceMessage =
        "Your most recent lift was the same as your last lift!";
      title = "Keep Going!";
      encouragement = "Let's get that lift increasing";
    } else {
      difference =
        ((mostRecent.entry - secondRecent.entry) / secondRecent.entry) * 100;
      differenceMessage = `Your most recent lift was a ${difference}% decrease from your last lift!`;
      title = "Bad Luck!";
      encouragement = "Let's get that personal best next time";
    }
    const toReturn = {
      difference: difference,
      differenceMessage: differenceMessage,
      title: title,
      encouragement: encouragement,
    };
    res.status(200).json(toReturn);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// Need to include logic for checking whether the threshold for booting an entry it reached.
export const addReport = async (req, res) => {
  const entryId = Object.keys(req.body)[0];
  const reporter = req.id;

  try {
    const updatedEntry = await leaderBoardEntry.findByIdAndUpdate(entryId, {
      $addToSet: { reports: { reporters: reporter } },
    });

    //Figure out how to count the number of reports for the entry and delete the entry if there are too many
    //Math.ceil(memberLimit/2) = limit

    const entryObj = await leaderBoardEntry
      .findById(entryId)
      .populate("leaderBoard");

    const reportLimit = Math.ceil(entryObj.leaderBoard.memberLimit / 2);
    const reports = entryObj.reports.length;
    if (reports >= reportLimit) {
      await leaderBoardEntry.findByIdAndDelete(entryId);
      res.status(200).json({ message: "deleted the entry.", entry: entryId });
    } else {
      res.status(200).json({ message: "added report", entry: entryId });
    }
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
