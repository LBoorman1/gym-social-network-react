import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  postMessage: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  community: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Community",
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
