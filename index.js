var express = require('express')
var app = express()
app.use(express.static('public'))
var js = require('./jsText')()
var versionList = require('./version')

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/test', function(req, res){
    res.sendFile(__dirname + '/public/test.html')
})

app.get('/getModule', function(req, res){
    var version = req.query.version
    if(version == 0){
        var data = {
            version: versionList[versionList.length - 1].version,
            data: js
        };
        res.send(JSON.stringify(data));
    }else{
        var isNewer = false;
        var toUpdateModules = {};

        for(var i = 0; i<versionList.length; i++){
            if(version == versionList[i].version){
                isNewer = true;
            }else if(isNewer){
                var module = versionList[i].module;
                for(var key in module){
                    if(module[key].change == 1){
                        toUpdateModules[module[key].name] = js[module[key].name];
                    }
                }
            }
        }
        var data = {
            version: versionList[versionList.length-1].version,
            data: toUpdateModules
        };
        res.send(JSON.stringify(data));
    }
})

var server = app.listen(80, function () {
    console.log('LS for Touch start!!!')
})
