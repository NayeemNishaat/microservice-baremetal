const express = require("express");

const app = express();
app.use(express.json());

app.post("/event", async (req, res) => {
  console.log(req.body);

  res.send({});
});

app.listen(7000, () => {
  console.log(
    "Query service listening on port 7000. Port 6000 is blocked by browser for X11."
  );
});
