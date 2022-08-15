const express = require("express");

const app = express();
app.use(express.json());

app.post("/event", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await fetch("http://localhost:10000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        type: "CommentUpdated",
        data: {
          id: data.id,
          postId: data.postId,
          status,
          content: data.content
        }
      })
    });
  }

  res.send({});
});

app.listen(7000, () => {
  console.log(
    "Query service listening on port 7000. Port 6000 is blocked by browser for X11."
  );
});
