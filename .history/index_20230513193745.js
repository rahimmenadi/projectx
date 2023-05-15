const express =require("express");
const path = require("path");
const publicPath = path.join(__dirname, "./html");
const app = express();
var engines = require('consolidate');
app.use(express.static(path.join(__dirname, 'views')));
app.engine('html', engines.mustache);
app.use(express.static(publicPath));
app.get("/signup", (req, res) => {
    res.render("sing-up-client");
  });
  
  app.listen(3000, () => {
    console.log("Server in port 3000 is up");
  });
  