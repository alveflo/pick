require('../pick/pick.js');
assert = require('assert');

testObj = {
	size: 10,
	length: 20,
	height: 30,
	x: 1,
	y: 2,
	z: 3
};

describe('Object pick', function() {
	describe('pick()', function() {
		var key = 'x';
		var test = testObj.pick(key);
		it('should return true', function() {
			assert.equal(testObj[key], test[key]);
		})
	}),
	describe('into() test', function() {
		var dest = { name : 'Anakin Skywalker' }
		it('should return true', function() {
			assert.equal({x:12}.pick('x').into(dest).x, 12);
		})
	}),
	describe('merge with', function() {
		var key = 'x';
		var test = testObj.pick(key);
		it('should return true', function() {
			var arr = [
				{
					x: 35,
					y: 2
				},
				{
					x: 32,
					y: 14
				}
			]
			assert.equal(testObj.pick('z').mergeWith(arr)[1].z,
				arr[1].z);
		})
	})
})