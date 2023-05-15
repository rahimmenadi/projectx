const express =require("express");
const path = require("path");

const app = express();
app.use(express.static("html"));
app.get("/", (req, res) => {
    res.send("sing-up-client");
  });
  
  app.listen(3000, () => {
    console.log("Server in port 3000 is up");
  });