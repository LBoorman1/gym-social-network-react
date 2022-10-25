import Community from "../models/community.js";
import CommunityUser from "../models/communityUser.js";

// export const createPost = async (req, res) => {
//     const post = req.body.postMessage;
//     const id = req.id;
//     const newPost = new PostMessage({ postMessage: post, creator: id });

//     try {
//       await newPost.save();
//       res.status(201);
//     } catch (error) {
//       res.status(409).json({ messsage: error.message });
//     }
//   };

export const createCommunity = async (req, res) => {
  const communityName = req.body.communityName;
  const creatorId = req.id;
  const description = req.body.description;
  const newCommunity = new Community({
    communityName: communityName,
    creator: creatorId,
    description: description,
  });

  try {
    await newCommunity.save();
    res.status(201);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const joinCommunity = async (req, res) => {
  const community = req.body.communityId;
  const user = req.body.userId;
  const check = CommunityUser.findOne({ community: community, user: user });
  if (check) {
    return res
      .status(409)
      .send({ message: "User is already a member of this community!" });
  }
  const newCommunityUser = new CommunityUser({
    community: community,
    user: user,
  });

  try {
    await newCommunityUser.save();
    res.status(201);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
