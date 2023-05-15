const express =require("express");
const path = require("path");
const publicPath = path.join(__dirname, "/views");
const app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get("/ ", (req, res) => {
    res.render("sing-up-client.html");
  });
  
  app.listen(3000, () => {
    console.log("Server in port 3000 is up");
  });
  
  