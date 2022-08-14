const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get("/post", (req, res) => {
  res.send(posts);
});

app.post("/post", (req, res) => {
  const id = randomBytes(4).toString("hex");
  posts[id] = { id, title: req.body.title };

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
