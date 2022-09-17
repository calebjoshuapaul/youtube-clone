import Video from "../models/Video.js";
import User from "../models/User.js";
import { createError } from "../utils/errors.js";

export const addVideo = async (req, res, next) => {
  try {
    const newVideo = new Video({
      ...req.body,
      userId: req.user.id,
    });
    const savedVideo = await newVideo.save();
    res.status(200).json(savedVideo);
  } catch (error) {
    next(createError(500, error.message));
  }
};

export const updateVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "No video was found"));
    }
    if (req.user.id === video.userId) {
      const updateUserVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json("Video updated");
    } else {
      return next(createError(404, "You can only update your video"));
    }
  } catch (error) {
    next(error);
  }
};
export const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "No video was found"));
    }
    if (video.userId === req.user.id) {
      await Video.findByIdAndDelete(req.params.id);
      res.status(200).json("Your video has been successfully deleted");
    } else {
      return next(createError(404, "You can delete only your video"));
    }
  } catch (error) {
    next(error);
  }
};

export const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "No video was found"));
    }
    res.status(200).json(video);
  } catch (error) {
    next(error);
  }
};

export const addView = async (req, res, next) => {
  try {
    await Video.findByIdAndUpdate(req.params.id, {
      $inc: {
        views: 1,
      },
    });
    res.status(200).json("Successfully incremented the count");
  } catch (error) {
    next(error);
  }
};

export const randomVideo = async (req, res, next) => {
  try {
    const videos = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const trendingVideo = async (req, res, next) => {
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (error) {
    next(error);
  }
};

export const sub = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return Video.find({ userId: channelId });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (error) {
    next(error);
  }
};

export const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  try {
    const videos = await Video.find({ tags: { $in: tags } }).limit(20);
  } catch (error) {
    next(error);
  }
};

export const getBySearch = async (req, res, next) => {
  const search = req.query.search;
  try {
    const videos = await Videos.find({
      title: { $regex: search, $options: "i" },
    }).limit(40);
  } catch (error) {
    next(error);
  }
};
