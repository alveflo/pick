'use strict'

var parseObject = function() {
	var obj = arguments[0];
	var ret = {};
	var keys = arguments[1];
	var filled = false;
	for (var i in keys) {
		var key = keys[i];
		if (obj.hasOwnProperty(key)) {
			ret[key] = obj[key];
			filled = true;
		}
	}
	if (filled)
		return ret;
	return null;
};

var parseArray = function() {
	var ret = [];
	var array = arguments[0];
	var keys = arguments[1];
	for (var i = 0; i < array.length; i++)
	{
		var obj = array[i];
		var val = parseObject(obj, keys);
		if (val != null)
			ret.push(val);
	}
	return ret;
};

Object.prototype.pick = function() {
	if (this instanceof Array)
		return parseArray(this, arguments);
	else
		return parseObject(this, arguments);
};

Object.prototype.into = function(obj) {
	if (obj != null) {
		if ((this instanceof Array) && (obj instanceof Array)) {
			for (var i = 0; i < this.length; i++) {
				obj.push(this[i]);
			}
		}
		else if ((this instanceof Object) && (obj instanceof Object)) {
			for (var key in this) {
				if (this.hasOwnProperty(key)) {
					obj[key] = this[key];
				}
			}
		}
	}
	return obj;
};

Array.prototype.mergeWith = function(array) {
	if (this instanceof Array && array instanceof Array) {
		for (var i = 0; i < array.length; i++) {
			var dest = array[i];
			for (var j = 0; j < this.length; j++) {
				var obj = this[j];
				for (var key in obj) {
					if (obj.hasOwnProperty(key)) {
						dest[key] = obj[key];
					}
				}
			}
			array[i] = dest;
		}
	}
	return array;
}