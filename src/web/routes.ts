import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});
router.post("/create/:id", (req, res) => {
  res.send("Create");
});
router.get("/read/:id", (req, res) => {
  res.send("Read");
});

export default router;
