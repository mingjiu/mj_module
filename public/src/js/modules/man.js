//module//Man//
(function(window, Man2){
    function Man(name){
        this.name = name;
        this.fly = function(){
            console.log(this.name);
        };
    }
    Man.prototype = new window.Man2('from-man');
    window.Man = Man;
})(window, Man2);
