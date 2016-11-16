;(function(window){

    var moduleInfo = {
        version: '1',
        gobal: {
            'angular': 'angular.1'
        },
        mjModule: {
            'a': 'a.1',
            'b': 'b.1'
        }
    };

    if(!localStorage.module_version){
        getAllModule();
        localStorage.module_version = moduleInfo.version;
    }else if(localStorage.module_version != moduleInfo.version){
        getUpdateModule();
        localStorage.module_version = moduleInfo.version;
    }else{
        console.log('所有js模块均为最新');
    }

    function getAllModule(){
        //获取所有js模块
        console.log('获取所有js模块');

        httpGetModule('all', function(module){
            for(var key in window.mjModule){
                window.localStorage['mj_module_'+key] = module;
            }
        });
    }

    function getUpdateModule(){
        //获取更新的js模块
        console.log('获取更新的js模块');
    }

    function httpGetModule(name, callback){
        var request = new XMLHttpRequest();
        request.open( "GET", window.location.origin + '/getModule?name=' + name );
        request.onreadystatechange = function(){
            if( request.readyState !== 4 ) {
                return;
            }
            if( request.status === 200 ){
                var script = window.document.createElement('script');
                script.type = 'text/javascript';
                script.innerHTML = (request.responseText);
                window.document.body.appendChild(script);
                callback(request.responseText);
            }
        }
    }

})(window);
