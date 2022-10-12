import mongoose from "mongoose";

const communitySchema = new mongoose.Schema({
  communityName: { type: String, required: true },
  description: { type: String, required: false },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  creator: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Community = mongoose.model("Community", communitySchema);
export default Community;
