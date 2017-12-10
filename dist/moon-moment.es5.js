"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

	/**
  * Install plugin
  * @param Moon
  * @param axios
  */

	var plugin = {
		init: function init(Moon, moment) {
			if (!moment) {
				console.error('You have to install moment');
				return;
			}

			Moon.moment = moment;
			Object.defineProperties(Moon.prototype, {
				moment: {
					get: function get() {
						return moment;
					}
				},
				$moment: {
					get: function get() {
						return moment;
					}
				}
			});
		}
	};

	if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object") {
		module.exports = plugin;
	} else if (typeof define == "function" && define.amd) {
		define([], function () {
			return plugin;
		});
	} else if (window.Moon && window.moment) {
		Moon.use(plugin, window.moment);
	}
})();