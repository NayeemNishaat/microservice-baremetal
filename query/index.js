const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/post", (req, res) => {
  //
});

app.get("/event", (req, res) => {
  //
});

app.listen(6000, () => {
  console.log("Query service listening on port 6000");
});
