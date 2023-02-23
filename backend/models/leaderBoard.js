import mongoose from "mongoose";

const leaderBoardSchema = new mongoose.Schema({
  community: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Community",
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  endDate: {
    type: Date,
    default: null,
  },
  title: String,
  description: String,
  memberLimit: {
    type: Number,
    default: 100,
  },
  memberCount: {
    type: Number,
    default: 1,
  },
});

const leaderBoard = mongoose.model("leaderBoard", leaderBoardSchema);
export default leaderBoard;
