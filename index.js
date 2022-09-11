import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/students.route.js";
import { paymentRouter } from "./routes/payments.route.js";
import { messageRouter } from "./routes/messages.route.js";
import { groupRouter } from "./routes/groups.route.js";


const dbUrl = "mongodb+srv://zelim:Ru95@cluster0.09gco.mongodb.net/intocode";
const port = 3025;
const app = express();

app.use(express.json());
app.use("/students", studentRouter);
app.use("/payments", paymentRouter);
app.use("/messages", messageRouter);
app.use("/groups", groupRouter);

const start = async (req, res) => {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected..");
    app.listen(port, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
