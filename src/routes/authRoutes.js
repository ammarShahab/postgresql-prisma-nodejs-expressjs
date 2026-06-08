// 8.0 creating a authentication system so create a authRoute.js file
import express from "express";
import { login, logOut, register } from "../controller/authController.js";

// 8.0.1
const router = express.Router();

// 8.0.2
router.post("/register", register);

// 9.1 creating login routes
router.post("/login", login);

// 11.1 creating logut routes
router.post("/logout", logOut);

export default router;
