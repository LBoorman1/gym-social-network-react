import mongoose from "mongoose";

const leaderBoardEntrySchema = new mongoose.Schema({
  leaderBoard: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "leaderBoard",
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  entry: {
    type: Number,
  },
  entryDate: {
    type: Date,
    default: new Date(),
  },
});

const leaderBoardEntry = mongoose.model(
  "LeaderBoardEntry",
  leaderBoardEntrySchema
);

export default leaderBoardEntry;
