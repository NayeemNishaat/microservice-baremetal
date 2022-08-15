const express = require("express");

const app = express();
app.use(express.json());

app.post("/event", async (req, res) => {
  const event = req.body;

  try {
    await fetch("http://localhost:4000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });

    await fetch("http://localhost:5000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });

    await fetch("http://localhost:7000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });

    await fetch("http://localhost:8000/event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
  } catch (err) {
    console.log(err);
  }

  res.send({ status: "OK" });
});

app.listen(10000, () => {
  console.log("Event bus listening on port 10000");
});
