// 2.0 created a src folder and make a server.js file

// 3. As we are using "const express = require("express")" in our server.js file, we need to change "type": "module" in our package.json file which is the new way of importing modules in nodejs.
// const express = require("express");
import express from "express";
// 4.4 import the movieRoute
import movieRoute from "./routes/movieRoute.js";
import authRoutes from "./routes/authRoutes.js";

// 6.1 import the dotenv
import { config } from "dotenv";

// 6.8 import the prisma, connectDB and disconnectDB
import { prisma, connectDB, disconnectDB } from "./config/db.js";

// 2.1 created a express app
const app = express();

// 8.5 Body parsing middlewares
app.use(express.json());

// 4.5 use the movieRoute which is a API route
app.use("/movies", movieRoute);

// 8.4 use the authRoutes
app.use("/auth", authRoutes);

// 6.2 use the dotenv
config();

// 6.9 connect with database
connectDB();

// 2.2 created a port
const PORT = 5000;

// 2.3 created a get route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// 2.4 listen the database connection
const server = app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// Handle unhandled promise rejections (e.g., database connection errors)
process.on("unhandled Rejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Handle uncaught exceptions (e.g., syntax errors)
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});

// Graceful shutdown
process.on("SIGINT", async () => {
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
