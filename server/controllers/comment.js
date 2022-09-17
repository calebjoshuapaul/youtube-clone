import Comments from "../models/Comments";
import Video from "../models/Video";
import { createError } from "../utils/errors.js";

export const addComment = async (req, res, next) => {
  try {
    const newComment = await new Comments({
      userId: req.user.id,
      ...req.body,
    });
    const saveComment = await newComment.save();
    res.status(200).json(saveComment);
  } catch (error) {
    next(error);
  }
};

export const removeComment = async (req, res, next) => {
  const comment = await Comments.findById(req.params.id);
  const video = await Video.find({ userId: req.user.id });
  if (!comment && !video) {
    return next(createError(404, "Comment/Video not found"));
  }
  if (req.user.id === comment.userId || req.user.id === video.userId) {
    try {
      await Comments.findByIdAndDelete(req.params.id);
      res.status(200).json("Comment deleted successfully");
    } catch (error) {
      next(error);
    }
  } else {
    next(createError(404, "Cannot delete comment made by other user"));
  }
};

export const getComment = async (req, res, next) => {
  try {
    const comments = await Comments.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};
