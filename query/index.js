const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get("/post", (_req, res) => {
  res.send(posts);
});

app.post("/event", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;
    posts[postId].comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;

    // posts[postId].comments.find((c) => c.id === id).status = status; // Note: In one go!
    const comment = posts[postId].comments.find((c) => c.id === id);
    comment.content = content;
    comment.status = status;
  }

  res.send({});
});

app.listen(8000, () => {
  console.log("Query service listening on port 8000");
});
