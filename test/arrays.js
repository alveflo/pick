require('../pick/pick.js');
assert = require('assert');

describe('Arrays', function() {
	describe('basic', function() {
		var key = 'Test';
		var obj = { name: key };
		var test = obj.pick(key);
		it('should return true', function() {
			assert.equal(obj[key], test[key]);
		})
	})
})