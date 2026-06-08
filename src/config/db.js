// 6.3 created a database connection in db.js file in config folder

import { PrismaClient } from "@prisma/client";

// 6.4 if the app is in production mode, then we need to log the queries and errors
const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "production"
      ? ["query", "error", "warn"]
      : ["error"],
});

// 6.5 connect  with database
const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB connected via prisma");
  } catch (error) {
    console.error(`database connection error: ${error.message}`);
    // it ends the nodejs app that it ends due to an error
    process.exit(1);
  }
};

// 6.6 disconnect with database
const disconnectDB = async () => {
  await prisma.$disconnect();
};

// 6.7 export the prisma, connectDB and disconnectDB
export { prisma, connectDB, disconnectDB };
