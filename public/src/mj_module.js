;(function(window, document){

	var module = function() {

		var baseUrl = location.origin + '/'
		var alias = {}
		var that = this

		this.module = {}

		this.config = function(map){
			that.config = map
			baseUrl = map.baseUrl
			alias = map.alias
		}

		this.define = function(){
			// var mod = that.module[arguments[0]] = {}
			// mod.name = arguments[0]
			// mod.deps = arguments[1]
			// var arg3 = arguments[2]
			// var args = []
			// var loaded = 0
			// for(var i in mod.deps){
			// 	if(that.module[mod.deps[i]]){
			// 		loaded = loaded + 1
			// 		args.push(that.module[mod.deps[i]].module)
			// 		if (loaded === mod.deps.length){
			// 			mod.module = arguments[2].apply(that.module, args)
			// 		}
			// 	} else {
			// 		getModule(mod.deps[i], function(){

			// 			if(mod.name == 'test'){
			// 				console.log(that.module[mod.deps[i]])
			// 			}

			// 			loaded = loaded + 1
			// 			args.push(that.module[mod.deps[i]].module)
			// 			if(loaded === mod.deps.length){
			// 				mod.module = arg3.apply(that.module, args)
			// 			}
			// 		})
			// 	}
			// }
			// mod.deps.length === 0 && (mod.module = arg3.apply(that.module, args))
			getModule(arguments)
		}

		function getModule(name, callback){
			console.log(arguments)
			// var url = setMouldeUrl(name)
			// var node = document.createElement('script')
			// node.src = baseUrl + url
			// node.onload = function(e){
			// 	document.getElementsByTagName('head')[0].removeChild(this)
			// 	// callback && callback()

			// 	console.log(that.module)

			// }
			// document.getElementsByTagName('head')[0].appendChild(node)
		}

		function setMouldeUrl(short){
			return alias[short] ? alias[short] : short
		}

		function runMoulde(module, name, from){
			// console.log(from, name)
			var args = []
			for(var i in module.deps){
				args.push(that.module[module.deps].module)
			}
			// module.module.apply(that.module, args)
		}

	}



	

	window.mj = new module()
	window.define = mj.define

})(window, document)
