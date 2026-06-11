// 13.0 My requirements is to create a watch list route so create a watchListRoute.js file and write the code like this

import express from "express";
import {
  addToWatchList,
  deleteMovieFromWatchList,
} from "../controller/watchListController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// 14.3 use the middleware on specific protected route
router.use(authMiddleware);

// 14.4 Now from this stage using thunderclient first login or register with the user and then copy the token and paste it in the header of thunderclient http://localhost:5000/watchlist route "Key: Authorization Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ4ZWJhODA4LTQ0YWUtNGZkNC04ZTIzLWNkNGVhNmI4NDlmMCIsImlhdCI6MTc4MTEwMDIwNCwiZXhwIjoxNzgxNzA1MDA0fQ.fH8SanmV2dKlPMKTfv3KlcsSRPWsiB4urMMcK7DumWY". Now copy any "movieId": "01KTNGFVB9APHBQAAMRRF9ZHNW", "status": "PLANNED", "note": "Good", "rating": 9 and paste it in the body of thunderclient http://localhost:5000/watchlist route and send, the data will be saved in the watchlist in the database. But if u untick the Header from the thunderclient and send the same data, it will show error because the route is protected and we need to pass the token in the header to access the route.

router.post("/", addToWatchList);

// 15.1 create the watchList delete route
router.delete("/:id", deleteMovieFromWatchList);

export default router;
