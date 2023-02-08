import leaderBoard from "../models/leaderBoard.js";
import leaderBoardEntry from "../models/leaderBoardEntry.js";
import LeaderBoardUser from "../models/leaderBoardUser.js";

//Needs updating as model has been expanded greatly, request will now transmit much more data
export const createLeaderBoard = async (req, res) => {
  const communityId = req.body.communityId;
  const creatorId = req.id;
  const title = req.body.title;
  const description = req.body.description;
  const memberLimit = req.body.memberLimit;
  const endDate = req.body.endDate;

  const newLeaderBoard = new leaderBoard({
    community: communityId,
    owner: creatorId,
    title: title,
    description: description,
    memberLimit: memberLimit,
    endDate: endDate,
  });

  try {
    const invalidLeaderBoard = await leaderBoard.findOne({
      community: communityId,
      title: title,
    });

    if (invalidLeaderBoard) {
      return res.status(409).send({
        message:
          "Leader Board already exists in this community - Try a different name",
      });
    }
    await newLeaderBoard.save();
    res.status(201).json(newLeaderBoard);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const retrieveByCommunity = async (req, res) => {
  const communityId = req.query.communityId;
  try {
    const leaderBoards = await leaderBoard.find({
      community: communityId,
    });
    res.status(200).json(leaderBoards);
  } catch (error) {
    res.status(401).json({ message: "an error has occured" });
  }
};

export const retrieveByUser = async (req, res) => {
  const user = req.id;

  const leaderBoardUsers = await LeaderBoardUser.find(
    { user: user },
    { _id: 0, leaderBoard: 1 }
  ).populate("leaderBoard");

  const leaderBoards = [];
  for await (const doc of leaderBoardUsers) {
    const newLeaderBoard = await leaderBoard.findOne({
      _id: doc.leaderBoard._id,
    });
    leaderBoards.push(newLeaderBoard);
  }
  return res.json(leaderBoards);
};

export const joinLeaderBoard = async (req, res) => {
  const leaderBoardId = req.body.leaderBoardId;
  const user = req.id;
  // console.log(user);

  const check = await LeaderBoardUser.findOne({
    leaderBoard: leaderBoardId,
    user: user,
  });
  if (check) {
    return res
      .status(409)
      .send({ error: "User is already a member of this leader board!" });
  }
  const newLeaderBoardUser = new LeaderBoardUser({
    leaderBoard: leaderBoardId,
    user: user,
  });

  try {
    await newLeaderBoardUser.save();
    const leaderBoardToAdd = await leaderBoard.findById(leaderBoardId);
    res.status(201).json({
      message: "Successfully joined the leader board!",
      leaderBoard: leaderBoardToAdd,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

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
