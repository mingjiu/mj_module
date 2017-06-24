var express = require('express')
var app = express()
app.use(express.static('public'))

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/test', function(req, res){
  res.sendFile(__dirname + '/public/test.html')
})


var server = app.listen(3000, function () {
  console.log('LS for Touch start!!!')
})
