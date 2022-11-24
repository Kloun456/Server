var express = require('express');
var app = express();
var date = new Date();

app.get('/', function (req, res) {
    res.end("Hello " + req.query.name + " date is " + date.toLocaleDateString('en-US'));
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Server is running")
})