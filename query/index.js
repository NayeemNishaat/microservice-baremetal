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
    const { id, content, postId } = data;
    posts[postId].comments.push({ id, content });
  }

  res.send({});
});

app.listen(7000, () => {
  console.log(
    "Query service listening on port 7000. Port 6000 is blocked by browser for X11."
  );
});
