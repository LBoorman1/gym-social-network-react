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
  title: String,
});

const leaderBoard = mongoose.model("leaderBoard", leaderBoardSchema);
export default leaderBoard;
