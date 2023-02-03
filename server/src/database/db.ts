import mongoose from "mongoose";

export const connect = async (uri: string) => {
  mongoose.set("strictQuery", false);
  return mongoose.connect(uri);
};
