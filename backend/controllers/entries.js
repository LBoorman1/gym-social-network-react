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
