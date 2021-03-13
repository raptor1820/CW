const express = require("express");
const app = express();
app.listen(3001, (error) => {
  console.log(error);
});
app.get("/:x", (req, res) => {
  var y = req.params.x;
  console.log(y);
});
