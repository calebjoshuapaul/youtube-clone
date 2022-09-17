import express from "express";
import {
  addComment,
  removeComment,
  getComment,
} from "../controllers/comment.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//add comment
router.post("/", verifyToken, addComment);

//delete comment
router.delete("/:id", verifyToken, removeComment);

//get comment
router.get("/:videoId", getComment);

export default router;
