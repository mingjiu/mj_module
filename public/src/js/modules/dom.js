//module//dom//
(function(window, Man){
    var dom  = window.document.getElementById('testid');
    dom.innerHTML = '这是个测试操作';
    window.testMan = new Man('testMan');
    console.log(window.testMan);
})(window, Man);
