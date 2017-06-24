mj.config({
	baseUrl: 'http://localhost:3000/src/',
	alias: { 
		'module2': 'module/module2.js',
		'module1': 'module/module1.js',
		'module3': 'module/module3.js',
		'module4': 'module/module4.js'
	}
})


define('test', ['module1'], function(mod1){
	console.log(mod1)
})