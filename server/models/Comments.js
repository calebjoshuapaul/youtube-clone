import mongoose from "mongoose";

const CommentsSchema = mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    videoId: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Comments", CommentsSchema);
