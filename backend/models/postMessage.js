import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    message: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    creator: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
    }
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;