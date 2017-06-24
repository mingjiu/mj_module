define('module1', ['module2'], function(module2){
	return {
		myFun: function(){
			console.log('module1 fun')
		},
		mod2: function(){
			module2.fun()
		}
	}
})