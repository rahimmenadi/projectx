const express =require("express");
const path = require("path");

const app = express();

app.get("/singup", (req, res) => {
    res.render("./html/sing-up-client.html");
  });
  
  app.listen(3000, () => {
    console.log("Server in port 3000 is up");
  });