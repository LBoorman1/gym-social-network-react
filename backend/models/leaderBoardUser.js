import mongoose from "mongoose";

const leaderBoardUserSchema = new mongoose.Schema({
  leaderBoard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "leaderBoard",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  joinedAt: {
    type: Date,
    default: new Date(),
  },
});

const LeaderBoardUser = mongoose.model(
  "LeaderBoardUser",
  leaderBoardUserSchema
);
export default LeaderBoardUser;
