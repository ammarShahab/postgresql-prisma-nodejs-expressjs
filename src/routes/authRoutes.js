// 8.0 creating a authentication system so create a authRoute.js file
import express from "express";
import { register } from "../controller/authController.js";

// 8.0.1
const router = express.Router();

// 8.0.2
router.post("/register", register);

export default router;
