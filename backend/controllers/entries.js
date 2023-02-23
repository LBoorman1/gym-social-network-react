import leaderBoardEntry from "../models/leaderBoardEntry.js";

export const addEntry = async (req, res) => {
  const leaderBoardId = req.body.leaderBoardId;
  const user = req.id;
  const entry = req.body.entry;

  //this will have to be changed based on leader board type i.e if its a run leader board then will have to check if there is an
  //entry that is already less than the proposed entry.
  const check = await leaderBoardEntry.findOne({
    leaderBoard: leaderBoardId,
    user: user,
    entry: { $gte: entry },
  });
  if (check) {
    return res
      .status(409)
      .send({ error: "User already has an entry better than this!" });
  }
  const newLeaderBoardEntry = new leaderBoardEntry({
    leaderBoard: leaderBoardId,
    user: user,
    entry: entry,
  });

  try {
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
