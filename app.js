var express = require('express');
var app = express();
global.router = express.Router();
global.mongoose = require('mongoose');
global._ = require('lodash');
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))

// // parse application/json
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb_test";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(require('./router/user'));

app.post('/test', (req, res) => {
    res.send({ data: req.body });
})


app.listen(3000, () => {
    console.log("app is running on PORT 3000 ")
})