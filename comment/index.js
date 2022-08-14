const express = require("express");
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const commentsByPostId = {};

app.get("/post/:id/comment", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post("/post/:id/comment", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");

  const comments = commentsByPostId[req.params.id] || [];

  comments.push({ id: commentId, content: req.body.content });

  commentsByPostId[req.params.id] = comments;

  await fetch("http://localhost:10000/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: "CommentCreated",
      data: { id: commentId, content: req.body.content, postId: req.params.id }
    })
  });

  res.status(201).send(comments);
});

app.post("/event", async (req, res) => {
  console.log(req.body);

  res.send({});
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
