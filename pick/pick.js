'use strict'

Object.prototype.pick = function() {
	var ret = {};
	for (var i in arguments) {
		var key = arguments[i];
		if (this.hasOwnProperty(key)) {
			ret[key] = this[key];
		}
	}
	return ret;
}

Object.prototype.into = function(obj) {
	if (obj != null) {
		if (typeof(obj) == 'object')
		{
			for (var key in this) {
				if (this.hasOwnProperty(key)) {
					obj[key] = this[key];
				}
			}
		}
	}
	return obj;
}