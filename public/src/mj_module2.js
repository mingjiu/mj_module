;(function(window, document){

	var module = function() {

		var baseUrl = location.origin + '/'

		var that = this
		this.config = function(map){
			// that.config = map
			baseUrl = map.baseUrl
			Object.keys(map.alias).forEach(function(keys, index, array){
				// that.module[keys] = {
				// 	moduleName: keys,
				// 	url: map.alias[keys]
				// }
				getModule(keys, map.alias[keys])
			})

		}

		this.module = {}

		this.define = function(){
			// var params = []
			// for(var i in arguments){
			// 	params[i] = arguments[i]
			// }
			var args = []
			that.module[arguments[0]] = {}
			that.module[arguments[0]].deps = arguments[1]
			for(var i in arguments[1]){
				args.push(arguments[1][i])
			}
			that.module[arguments[0]].module = arguments[2].apply(that.module, args)
		}

		this.use = function(deps, module){
			var args = []
			for(var i in deps){
				args.push(that.module[deps[i]].module)
			}
			module.apply(that.module, args)
		}

		function getModule(moduleName, url){
			var node = document.createElement('script')
			node.src = baseUrl + url
			node.onload = function(e){
				document.getElementsByTagName('head')[0].removeChild(this)
			}
			node.setAttribute('module-name', moduleName)
			document.getElementsByTagName('head')[0].appendChild(node)
		}

	}



	

	window.mj = new module()
	window.define = mj.define

})(window, document)
