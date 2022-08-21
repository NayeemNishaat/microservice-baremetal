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

app.post("/post", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  posts[id] = { id, title: req.body.title };

  await fetch("http://event-bus-svc:10000/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type: "PostCreated",
      data: { id, title: req.body.title }
    })
  });

  app.post("/event", async (req, res) => {
    res.send({});
  });

  res.status(201).send(posts[id]);
});

app.listen(4000, () => {
  console.log("Post service listening on port 4000");
});
