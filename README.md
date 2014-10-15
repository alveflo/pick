.pick
====

A json expando-ish utility. Experimental repo so far...

### Usage
##### .pick()
```javascript
require('./pick.js');
var foo = { x: 1, y: 2 };
foo.pick('x');
// yields { x: 1 }
```
##### .into()
```javascript
require('./pick.js');
var foo = { x: 1, y: 2 };
var bar = { z: 34 };
foo.pick('x', 'y')
   .into(bar);
// -> bar = { z: 34, x: 1, y: 2 }

```