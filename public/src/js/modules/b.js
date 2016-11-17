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
