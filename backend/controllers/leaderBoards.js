import leaderBoard from "../models/leaderBoard.js";
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

export const joinLeaderBoard = async (req, res) => {
  const leaderBoard = req.body.leaderBoardId;
  const user = req.id;

  const check = await LeaderBoardUser.findOne({
    leaderBoard: leaderBoard,
    user: user,
  });
  if (check) {
    return res
      .status(409)
      .send({ message: "User is already a member of this leader board!" });
  }
  const newLeaderBoardUser = new LeaderBoardUser({
    leaderBoard: leaderBoard,
    user: user,
  });

  try {
    await newCommunityUser.save();
    res.status(201).json({ message: "Successfully joined the leader board!" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
