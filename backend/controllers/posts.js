import CommunityUser from "../models/communityUser.js";
import PostMessage from "../models/postMessage.js";

export const createPost = async (req, res) => {
  const post = req.body.postMessage;
  const id = req.id;
  const communityId = req.body.communityId;

  try {
    const userCheck = await CommunityUser.findOne({
      community: communityId,
      user: id,
    });
    if (userCheck) {
      const newPost = new PostMessage({
        postMessage: post,
        creator: id,
        community: communityId,
      });
      await newPost.save();
      res.status(201).json({ message: "Post Created Successfully" });
    } else {
      res
        .status(404)
        .json({ message: "User is not a member of this community" });
    }
  } catch (error) {
    res.status(409).json({ messsage: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const retrieveByCommunity = async (req, res) => {
  try {
    const userId = req.id;
    const communityId = req.query.communityId;

    //TODO: Check whether the user is a part of the community and then allow them to view the content
    const userCheck = await CommunityUser.findOne({
      community: communityId,
      user: userId,
    });
    if (userCheck) {
      const posts = await PostMessage.find({ community: communityId });
      res.status(200).json(posts);
    } else {
      res
        .status(404)
        .json({ message: "User is not a member of this community!" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: "There are no posts for this community!" });
  }
};
