const express = require("express");
const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname + "/../projectx")))
var cors = require('cors')

app.use(cors())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });
app.listen(8080 , () => {
    console.log("app is aploard seccussfully iio")
})