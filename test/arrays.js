require('../pick/pick.js');
assert = require('assert');

var arr1 = [
	{
		x: 1,
		y: 2
	},
	{
		x: 3,
		y: 4
	},
];

var arr2 = [
	{
		z: 1,
		q: 8,
	},
	{
		z: 2,
		q: 9
	},
];

describe('Array pick', function() {
	describe('pick() and into() array comparison', function() {
		it('should return true', function() {
			var temp = arr2;
			var t1 = arr1.pick('x').into(temp);
			assert.equal(t1[3].z, temp[3].z);
		})
	}),
	describe('pick() value comparison', function() {
		it('should return true', function() {
			var t1 = arr2.pick('z');
			assert.equal(t1[1].z, 2);
		})
	}),
	describe('mergeWith() value comparison', function() {
		it('should return true', function() {
			var a1 = arr1;
			var a2 = arr2;
			var t1 = a2.pick('z').mergeWith(a1);
			assert.equal(t1[1].z, 2);
		})
	})
})