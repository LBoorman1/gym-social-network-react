import CommunityUser from "../models/communityUser.js";
import PostMessage from "../models/postMessage.js";
import cloudinary from "../utils/cloudinary.js";

export const createPost = async (req, res) => {
  const post = req.body.postMessage;
  const id = req.id;
  const communityId = req.body.communityId;
  const image = req.body.image;

  try {
    const userCheck = await CommunityUser.findOne({
      community: communityId,
      user: id,
    });
    if (userCheck) {
      //cloudinary image upload stuff

      const result = await cloudinary.uploader.upload(image, {
        folder: "posts",
      });

      // console.log(result);

      const newPost = new PostMessage({
        postMessage: post,
        creator: id,
        community: communityId,
        image: {
          public_id: result.public_id,
          url: result.secure_url,
        },
      });
      await newPost.save();

      res.status(201).json(await newPost.populate("creator"));
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

    if (!communityId) {
      res.status(404).json({ message: "Select a community to view posts" });
    } else {
      const userCheck = await CommunityUser.findOne({
        community: communityId,
        user: userId,
      });

      if (userCheck) {
        const posts = await PostMessage.find({
          community: communityId,
        }).populate("creator");
        const isEmpty = Object.keys(posts).length === 0;
        if (!isEmpty) {
          res.status(200).json(posts);
        } else {
          res.status(404).json({
            message: "There are currently no posts for this community!",
          });
        }
      } else {
        res
          .status(404)
          .json({ message: "User is not a member of this community!" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: "There are no posts for this community!" });
  }
};
