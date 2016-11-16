function jsText(){
    var fs = require("fs");
    var all = fs.readFileSync(__dirname+'/public/dist/modules/index.min.js',"utf-8");
    all = all.split('//module//');
    var jsMap = {};
    for(var i = 1; i < all.length; i++){
        var temp = all[i].split('//\n');
        if(i == 1){
            temp[1] = '(' + temp[1].substring(1, temp[1].length-2) + ');';
        }else if(i == all.length - 1){
            temp[1] = '(' + temp[1].substring(0, temp[1].length-1) + ');';
        }else{
            temp[1] = '(' + temp[1].substring(0, temp[1].length-2) + ');';
        }
        jsMap[temp[0]] = temp[1];
    }
    // console.log(jsMap);
    return jsMap;
}
module.exports = jsText;
