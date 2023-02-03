import { app } from "./app";
import "dotenv/config";
import { connect } from "mongoose";
const checkEnv = () => {
  const env = [
    "PORT",
    "NODE_ENV",
    // "COOKIE_NAME",
    // "JWT_SECRET",
    // "JWT_EXPIRATION",
    // "MONGO_URI",
    // "MONGO_URI_TESTING",
  ];
  env.forEach((data) => {
    if (!process.env[data]) {
      console.log(`${data} env not found`);
      process.exit(1);
    }
  });
};
const initServer = async () => {
  checkEnv();

  try {
    await connect(process.env.MONGO_URI!);
    console.log("Mongo Connected");
  } catch (err) {
    if (err instanceof Error) console.log(err.message);
    process.exit(1);
  }

  app.listen(process.env.PORT, () => {
    console.log("server running");
  });
};

initServer();
