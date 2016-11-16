(function(window){
    window.setVersion = function(){
        localStorage.mj_moduleVersion = 1;
        localStorage.mj_module_deltest = '(functin(){console.log("test");})()';
    };
    var newestVersion = '3';
    var modules = {};
    var moduleMap = {
        'A': { },
        'abc': {},
        'B': {},
        'base': {deps:['Man', 'Man2']},
        'C': {},
        'dom': {deps:['Man']},
        'Man': {deps:['Man2']},
        'Man2': {}
    };
    var v = localStorage.mj_moduleVersion ? localStorage.mj_moduleVersion : '0';
    if(v == '0' || v != newestVersion){
        httpGetModule(v, function(data){
            moduleLoad(data);
        });
    }else{ moduleLoad(); }

    function moduleLoad(data){
        if(v !== '0'){
            var reg = /mj_module_/;
            for(var key in localStorage){
                if(reg.test(key)){
                    if(!moduleMap.hasOwnProperty(key.substr(10))){delete localStorage[key];}
                    else{ modules[key.substr(10)] = localStorage[key];}
                }
            }
        }
        for(var key2 in data){
            modules[key2] = data[key2];
            localStorage['mj_module_'+key2] = data[key2];
        }

        for(var key3 in moduleMap){
            toEval(key3);
        }
    }

    function toEval(m){
        if(!moduleMap[m].deps){
            if(!moduleMap[m].loaded){
                eval(modules[m]);
                moduleMap[m].loaded = true;
            }
        }else{
            for(var i = 0; i<moduleMap[m].deps.length; i++){
                toEval(moduleMap[m].deps[i]);
                eval(modules[m]);
                moduleMap[m].loaded = true;
            }
        }
    }

    function httpGetModule(version, callback){
        var request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if( request.readyState !== 4){
                return;
            }
            if( request.status === 200 ){
                var data = JSON.parse(request.responseText);
                localStorage.mj_moduleVersion = data.version;
                callback(data.data);
            }
        };
        request.open( "GET", window.location.origin + '/getModule?version=' + version );
        request.send();
    }
})(window);
