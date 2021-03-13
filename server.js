const express = require("express");
const parser = require("body-parser");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.json());
app.use(parser.json());
app.listen(port, function (error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is running");
  }
});
app.get("/", function (req, res) {
  res.render("index");
});
function validator(req, res, next) {
  // var data = req.body.email;
  // var password = req.body.password;

  // var count = 0;
  // if (data.search("@") != -1) {
  //   count++;
  // }
  // if (data.search(".com") != -1) {
  //   count++;
  // }
  // if (count == 2) {
  //   next();
  // } else {
  //   res.send("Incorrect email format");
  // }
  next();
}
app.post("/form", validator, function (req, res) {
  res.send("Sign up successful");
});
app.get("/start", function (req, res) {
  res.send("Connected");
  res.send("Start");
});

// app.post("/data", function (req, res) {
//   console.log(req.body);
// });
