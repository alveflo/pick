Object.prototype.pick = function(key) {
	if (this.hasOwnProperty(key)) {
		var ret = {};
		ret[key] = this[key];
		return ret;
	}
	else
		return null;
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