import express from "express";
import bodyParser from "body-parser";
import "reflect-metadata";
import webhookRoutes from "./routes/webhook.js";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api", webhookRoutes);

app.use("/", (req, res) => {
  return res.send("Welcome to the webhook server");
});

try {
  app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
} catch (error) {
  console.log(error);
}