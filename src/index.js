(function () {

/**
 * Install plugin
 * @param Moon
 * @param axios
 */

const plugin = {
	init(Moon, moment) {
		if(!moment) {
			console.error('You have to install moment')
			return
		}

		Moon.moment = moment
		Object.defineProperties(Moon.prototype, {
			moment: {
				get() {
					return moment
				}
			},
            $moment: {
                get() {
                        return moment
                }
            }
		})
	}
}

if(typeof exports == "object") {
	module.exports = plugin
} else if(typeof define == "function" && define.amd) {
	define([], function(){ return plugin })
} else if(window.Moon && window.moment) {
	Moon.use(plugin, window.moment)
}


})()
