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
  reports: [
    {
      _id: false,
      reporters: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
      },
    },
  ],
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

const leaderBoardEntry = mongoose.model(
  "LeaderBoardEntry",
  leaderBoardEntrySchema
);

export default leaderBoardEntry;
