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
