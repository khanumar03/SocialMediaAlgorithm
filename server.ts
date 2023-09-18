import express, { Application } from "express";
import mongoose from "mongoose";
import "./models/User";
import { config } from "dotenv";
config();

const app: Application = express();

async function _init() {
  app.use(express.json());

  await mongoose.connect(process.env.DB_URI as string);

  app.get("/", (req, res) => {
    res.json({ message: "hello world" });
  });

  app.listen(5000, () => console.log("server and db connected"));
}

_init().catch((err) => console.log(err));
