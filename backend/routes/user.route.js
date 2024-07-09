import express from "express";
import { getUserProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();
router.get("/profile/:username",getUserProfileAndRepos);

//Todo => GET likes (who liked our profile)
//Todo => POST like a profile

export default router;