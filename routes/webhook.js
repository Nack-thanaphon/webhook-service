import express from "express";

const 
router = express.Router();

router.post("/webhook", async (req, res) => {
  const content = req.body.message;
  console.log("webhook work : ", content);
  //   message.success = success;
  res.status(200).json({ status: "success" });
});

export default router;
