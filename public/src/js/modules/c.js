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
