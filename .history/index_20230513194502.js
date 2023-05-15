const express =require("express");
const path = require("path");
const publicPath = path.join(__dirname, "views");
const app = express();
var engines = require('consolidate');
app.use(express.static(publicPath));
app.engine('html', engines.mustache);

app.get("/signup", (req, res) => {
    res.render("sing-up-client.html");
  });
  
  app.listen(3000, () => {
    console.log("Server in port 3000 is up");
  });
  