// 10.1 create a utils folder (for reusable function) and created reusable generateToken function and use it in register and login
import jwt from "jsonwebtoken";

// 10.6 to securely set the jwt token is the HTTP only so pass the second parameter which is res
export function generateToken(userId, res) {
  const payload = { id: userId };
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  //10.7 then set the cookie securely and also run "npm install cookie-parser"
  res.cookie("jwt", token, {
    httpOnly: true, //Blocks JavaScript from reading the cookie (XSS protection)
    secure: process.env.NODE_ENV === "production", //Only sends cookie over HTTPS (prevents interception)
    sameSite: "strict", //	Cookie won't be sent on cross-site requests (CSRF protection)
    maxAge: 60 * 60 * 60 * 25 * 7, // 7 days in milliseconds
  });

  return token;
}
