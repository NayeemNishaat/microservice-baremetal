const express = require("express");
const { randomBytes } = require("crypto");
const app = express();
app.use(express.json());

const commentsByPostId = {};

app.get("/post/:id/comment", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/post/:id/comment", (req, res) => {
  const commentId = randomBytes(4).toString("hex");

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content: req.body.content });

  commentsByPostId[req.params.id] = comments;

  res.status(201).send(comments);
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
