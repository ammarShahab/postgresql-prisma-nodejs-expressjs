import jwt from "jsonwebtoken";
import { prisma } from "../config/db.js";

// 14.0 created a middleware folder and make a authMiddleware.js file. Middleware in Express (and web frameworks in general) are functions that run between the incoming request and your route handler. They process the request before it reaches your controller.

export const authMiddleware = async (req, res, next) => {
  console.log("auth middleware reached");

  //14.1 read the token from the request
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  //14.2 varify the token and extract the user id
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded", decoded);

    const user = await prisma.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return res.status(401).json({ error: "User does not exist" });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized, token failed" });
  }
};
