import mongoose from "mongoose";
import { connect } from "../database/db";
import "dotenv/config";
import request from "supertest";
import { app } from "../app";

interface product {
  success: true;
  data: {
    item: string;
    price: number;
    description: string;
    quantity: number;
    id: string;
  };
}
declare global {
  function getCookie(): Promise<string[]>;
  function createProduct(price?: number): Promise<product>;
}

beforeAll(async () => {
  await connect(process.env.MONGO_URI_TESTING!);
});

beforeEach(async () => {
  const collections = await mongoose.connection.db.collections();

  for (let collection of collections) {
    await collection.drop();
  }
});

// afterAll(done => {
//   // Closing the DB connection allows Jest to exit successfully.
//   mongoose.connection.close()
//   done()
// })
