import leaderBoard from "../models/leaderBoard.js";

//Needs updating as model has been expanded greatly, request will now transmit much more data
export const createLeaderBoard = async (req, res) => {
  const communityId = req.body.communityId;
  const creatorId = req.id;
  const title = req.body.title;

  const newLeaderBoard = new leaderBoard({
    community: communityId,
    owner: creatorId,
    title: title,
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
    res.status(201);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
