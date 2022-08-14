const express = require("express");

const app = express();
app.use(express.json());

app.post("/event", (req, res) => {
  const event = req.body;

  fetch("http://localhost:4000/event", {
    method: "POST",
    body: event
  });
  fetch("http://localhost:5000/event", {
    method: "POST",
    body: event
  });
  fetch("http://localhost:6000/event", {
    method: "POST",
    body: event
  });

  res.send({ status: "OK" });
});

app.listen(8000, () => {
  console.log("Event bus listening on port 8000");
});
