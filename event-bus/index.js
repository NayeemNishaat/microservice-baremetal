const express = require("express");

const app = express();
app.use(express.json());

const events = [];

app.post("/event", (req, res) => {
  const event = req.body;

  events.push(event);

  try {
    // Note: Don't use await here! We don't want to wait for the event to be finished we just send them all at once.
    fetch("http://localhost:4000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });

    fetch("http://localhost:5000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });

    fetch("http://localhost:8000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });

    // Remark: await is used so, the order of calling the sevices matters! i.e. If we call this moderation service before the query service, then the CommentUpdate is fired before the CommentCreated event. This the updating causes error because comment is undefined. Key: Hence query service needs to be called first so that the comment is created before it is moderated/updated.
    // Fix: Don't use await!
    fetch("http://localhost:7000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  } catch (err) {
    console.log(err); // Note: Doesn't work for uncaughtException.
  }

  res.send({ status: "OK" });
});

app.get("/event", (req, res) => {
  res.send(events);
});

app.listen(10000, () => {
  console.log("Event bus listening on port 10000");
});

process.on("uncaughtException", function (error) {
  // Point: For uncaughtException, we don't want to crash the app.
  console.log(error.stack);
});
