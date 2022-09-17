import express from "express";
import {
  addVideo,
  updateVideo,
  deleteVideo,
  getVideo,
  addView,
  trendingVideo,
  randomVideo,
  sub,
  getByTag,
  getBySearch,
} from "../controllers/video.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//add video
router.post("/", verifyToken, addVideo);

//update video
router.put("/:id", verifyToken, updateVideo);

//delete video
router.delete("/:id", verifyToken, deleteVideo);

//get video
router.get("/find/:id", getVideo);

//increace video view
router.put("/view/:id", addView);

//get trending videos
router.get("/trend", trendingVideo);

//get random videos
router.get("/random", randomVideo);

//get subscribed channel videos
router.get("/sub", verifyToken, sub);

//get sorted videos by tags
router.get("/tags", getByTag);

//get sorted videos by search
router.get("/search", getBySearch);

export default router;
