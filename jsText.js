function jsText(){
    var fs = require("fs");
    var js = fs.readFileSync(__dirname+'/public/dist/all.min.js',"utf-8");

    js = js.split('var mjModule="mjModule";');
    for(var i in js){
        console.log(js[i]);
    }

}
module.exports = jsText;
