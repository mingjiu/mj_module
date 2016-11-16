var mjModule = 'mjModule';(function(window){
    function A(){
        this.name = 'Object A';
        this.display = function(){
            console.log(this.name);
        };
        this.b = 'a';
    }
})(window);

var mjModule = 'mjModule';(function(window){
    function Man(name){
        this.name = name;
        this.speak = function(){
            console.log('I can speak');
        };
        this.walk = function(){
            console.log(this.name + ' is walking');
        };
    }
    if(!window.hasOwnProperty('mjModule')){
        window.mjModule = {};
    }
    window.mjModule.Man = Man;
})(window);

var mjModule = 'mjModule';(function(window){
    function B(){
        this.name = 'Object B';
        this.display = function(){
            console.log(this.name);
        };
    }
})(window);

var mjModule = 'mjModule';(function(window){
    function C(){
        this.name = 'Object C';
        this.display = function(){
            console.log(this.name);
        };
    }
})(window);

//abcd
var mjModule = 'mjModule';
(function(window){
    function Man(name){
        this.name = name;
        this.speak = function(){
            console.log('I can speak');
        };
        this.walk = function(){
            console.log(this.name + ' is walking ');
        };
    }
    window.module = Man;
})(window);
