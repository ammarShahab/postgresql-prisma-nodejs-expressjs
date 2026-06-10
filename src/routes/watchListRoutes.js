// 13.0 My requirements is to create a watch list route so create a watchListRoute.js file and write the code like this

import express from "express";
import { addToWatchList } from "../controller/watchListController.js";

const router = express.Router();

router.post("/", addToWatchList);

export default router;
