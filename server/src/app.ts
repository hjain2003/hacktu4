import express from "express";
import cors from "cors";
import "express-async-errors";

export const app = express();

// middlewares
app.use(express.json());
app.use(cors());

//routes

app.all("*", (req, res) => {
  res.json("PageNot found");
});
