//module//A//
(function(window){
    function A(){
        this.name = 'Object A';
        this.display = function(){
            console.log(this.name);
        };
        this.b = 'a';
    }
    window.A = A;
}(window));

//module//abc//
(function(window){
    function abc(){
        this.name = 'abc';
    }
    window.abc = abc;
})(window);

//module//B//
(function(window){
    function B(){
        this.name = 'Object B';
        this.display = function(){
            console.log(this.name);
        };
    }
    window.B = B;
})(window);

//module//base//
(function(window, Man, Man2){
    if(!window.hasOwnProperty('module')){
        window.module = {};
    }
    console.log(Man);
    console.log(Man2);
})(window, Man, Man2);

//module//C//
(function(window){
    function C(){
        this.name = 'Object C';
        this.display = function(){
            console.log(this.name);
        };
    }
    window.C = C;
})(window);

//module//dom//
(function(window, Man){
    var dom  = window.document.getElementById('testid');
    dom.innerHTML = '这是个测试操作';
    window.testMan = new Man('testMan');
    console.log(window.testMan);
})(window, Man);

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

//module//Man2//
(function(window){
    function Man2(name){
        this.name = name;
        this.speak = function(){
            console.log('I can speak');
        };
        this.walk = function(){
            console.log(this.name + ' is walking ');
        };
    }
    window.Man2 = Man2;
})(window);
