import comment from "../models/comment.js";

export const createComment = async (req, res) => {
  const creator = req.id;
  const post = req.body.postId;
  const message = req.body.comment;

  const newComment = new comment({
    post: post,
    message: message,
    creator: creator,
  });

  try {
    let commentsOnPost = await comment.count({ creator: creator, post: post });
    if (commentsOnPost >= 10) {
      return res
        .status(409)
        .send({ message: "Too many comments from user on this post!" });
    }
    await newComment.save();
    return res.status(200).json(newComment);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getComments = async (req, res) => {
  const post = req.query.postId;
  try {
    const comments = await comment.find({ post: post }).populate("creator");
    res.status(200).json(comments);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const deleteComment = async (req, res) => {
  const commentId = req.body.commentId;
  const userId = req.id;

  try {
    const deletedDoc = await comment.findOneAndDelete({
      _id: commentId,
      creator: userId,
    });
    res.status(200).json(deletedDoc);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
