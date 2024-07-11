import express from "express";
import bodyParser from "body-parser";
import "reflect-metadata";
import webhookRoutes from "./routes/webhook.js";

const app = express();
app.use(bodyParser.json());

// app.use("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api", webhookRoutes);

try {
  app.listen(3500, () => {
    console.log("Server started on port 3500");
  });
} catch (error) {
  console.log(error);
}
