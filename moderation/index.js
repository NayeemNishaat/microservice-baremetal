const express = require("express");

const app = express();
app.use(express.json());

app.post("/event", async (req, res) => {
  console.log(req.body);

  res.send({});
});

app.listen(8000, () => {
  console.log("Moderation service listening on port 8000");
});
