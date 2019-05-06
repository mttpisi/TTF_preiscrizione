var express = require('express');
var app = express();

app.use('/db',express.static(__dirname + '/db'));
app.use('/js',express.static(__dirname + '/../backoffice/js'));
app.use('/css',express.static(__dirname + '/../backoffice/css'));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/../backoffice/index.html');
});

app.listen(3000, function () {
    console.log('Server in ascolto su 3000');
});