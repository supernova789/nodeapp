const http = require('http');
var express = require('express');
const path = require('path');

var app = express();

app.use('/css',express.static(__dirname +'/css'));

app.use(express.json());

// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
  });
  
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});