// 8.1 created a controller folder with a authController.js file
import bcrypt, { hash } from "bcryptjs";
import { prisma } from "../config/db.js";
import { error } from "node:console";

//  8.2 created a register function
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const userExist = await prisma.user.findUnique({ where: { email: email } });

  // console.log(userExist);

  if (userExist) {
    return res.status(400).json({ error: "User already exists" });
  }

  //8.6 for hashing password first install "npm i bcrypt"
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // 8.7 create user
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // 8.8 save the data with the status code
  res.status(201).json({
    message: "success",
    data: {
      id: user.id,
      name,
      email,
      password,
    },
  });
};

// 9.0 creating a login function
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email: email },
  });

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  res.status(201).json({
    message: "success",
    data: {
      id: user.id,
      email,
    },
  });
};
// 8.3 export the register function
export { register, login };
