var express = require('express')
var app = express()
app.use(express.static('public'))
var js = require('./jsText')()
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/test', function(req, res){
    res.sendFile(__dirname + '/public/test.html')
})

app.get('/getModule', function(req, res){
    var version = req.query.version


    // res.sendFile(__dirname + '/public/src/js/'+ name +'.js')
})

var server = app.listen(80, function () {
    console.log('LS for Touch start!!!')
})
