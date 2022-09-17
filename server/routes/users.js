import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribeUser,
  unsubscribeUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//update user
router.put("/:id", verifyToken, updateUser);

//delete user
router.delete("/:id", verifyToken, deleteUser);

//get user
router.get("/find/:id", getUser);

//subscribe a user
router.put("/subscribe/:id", verifyToken, subscribeUser);

//unsubscribe a user
router.put("/unsubscribe/:id", verifyToken, unsubscribeUser);

//like a video
router.put("/like/:videoId", verifyToken, like);

//dislike a video
router.put("/dis like/:videoId", verifyToken, dislike);

export default router;
