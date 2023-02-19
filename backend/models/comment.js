import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "PostMessage",
  },
  message: {
    type: String,
  },
  creator: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  postedAt: {
    type: Date,
    default: new Date(),
  },
});

const comment = mongoose.model("Comment", commentSchema);

export default comment;
