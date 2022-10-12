import mongoose from "mongoose";

const communityUserSchema = new mongoose.Schema({
  community: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Community",
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

const CommunityUser = mongoose.model("CommunityUser", communityUserSchema);
export default CommunityUser;
