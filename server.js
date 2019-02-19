const express = require("express");
const bodyParser = require('body-parser');
const app = express();


v
app.get("/", (req, res) => {
  res.send("this is working");
});
app.listen(3000, () => {
  console.log("app is running on port 3000 :");
});
