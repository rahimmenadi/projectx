const express =require("express");
const path = require("path");
const publicPath = path.join(__dirname, "./html");
const app = express();
app.use(express.static(publicPath));
app.get("/signup", (req, res) => {
    res.send("sing-up-client.html");
  });
  
  app.listen(3000, () => {
    console.log("Server in port 3000 is up");
  });