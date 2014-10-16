.pick
====

A javascript object and array extender that lets you write more elegant code.

## API
### Object.prototype functions
#### .pick(key)
```javascript
var foo = { x: 1, y: 2 };
foo.pick('x');
// yields { x: 1 }
```
#### .into(obj)
```javascript
var foo = { x: 1, y: 2 };
var bar = { z: 34 };
foo.pick('x', 'y')
   .into(bar);
// -> bar = { z: 34, x: 1, y: 2 }
```
#### .mergeWith(array)
```javascript
var foo = { x: 1, y: 2 };
var bar = [ { x: 1 }, { x: 2 }];
foo.pick('y')
   .mergeWith(bar);
// -> bar = [ { x: 1, y: 2 }, { x: 2, y: 2 } ]
```
### Array.prototype functions
#### .pick(key)
```javascript
var foo = [ { y: 1, z: 2 }, { y: 2, z: 3 }];
foo.pick('y')
// yields [ { y: 1 }, { y: 2 } ]
```
#### .into(array)
```javascript
var foo = [ { y: 1, z: 2 }, { y: 2, z: 3 }];
var bar = [ { x: 1 }, { x: 2 }];
foo.pick('y')
   .into(bar)
// -> bar = [ { x: 1 }, { x: 2 }, { y: 1 }, { y: 2 } ]
```
#### .mergeWith(array)
```javascript
var foo = [ { y: 1, z: 2 }, { y: 2, z: 3 }];
var bar = [ { x: 1 }, { x: 2 }];
foo.pick('y')
   .mergeWith(bar)
// -> bar = [ { x: 1, y: 2 }, { x: 2, y: 2 } ]
```
## Notes
This library contains functions that is jacked into Object's and Array's prototype. Take in consideration that this can cause some funny behavior when iterating objects/arrays. Remember, as you always should do, to check `hasOwnProperty` when iterating objects/arrays:
```javascript
for (var key in someObject) {
	if (someObject.hasOwnProperty(key)) {
		// do some stuff
	}
}
```
## Licence
MIT
