// 4.0 created a movieRoute Folder and make a route.js file

import express from "express";

// 4.1  created a router
const router = express.Router();

// 4.2 created a route
router.get("/", (req, res) => {
  res.send({ message: "Hello Movies" });
});

// 4.6 created other route also
router.post("/", (req, res) => {
  res.send({ message: "Hello Movies Post!" });
});

// 4.6 created other route also
router.put("/", (req, res) => {
  res.send({ message: "Hello Movies Put!" });
});

// 4.6 created other route also
router.delete("/", (req, res) => {
  res.send({ message: "Hello Movies Delete!" });
});

// 4.3 export the router
export default router;
