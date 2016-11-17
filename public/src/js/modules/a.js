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
