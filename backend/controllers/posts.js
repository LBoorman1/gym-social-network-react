import PostMessage from "../models/postMessage.js";

export const createPost = async (req, res) => {
  const post = req.body.postMessage;
  const id = req.id;
  const newPost = new PostMessage({ postMessage: post, creator: id });

  try {
    await newPost.save();
    res.status(201);
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
