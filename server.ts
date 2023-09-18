import express, { Application } from "express";
import mongoose from "mongoose";
import "./models/User";

const app: Application = express();

async function _init() {
  app.use(express.json());

  await mongoose
    .connect
    // "mongodb+srv://algorithm:khan123456@cluster0.cpovggi.mongodb.net/?retryWrites=true&w=majority"
    ();

  app.get("/", (req, res) => {
    res.json({ message: "hello world" });
  });

  app.listen(5000, () => console.log("server and db connected"));
}

_init().catch((err) => console.log(err));
