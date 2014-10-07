.pick
====

A json expando-ish utility. Experimental repo so far...

### Usage
```javascript
require('./pick.js');
var github = {website: GitHub, user: victorzki, repo: pick};
var websites = { something: 'value', key: 'value'  };

var github = obj.pick('repo');
// -> github = { repo: 'pick' }
obj.pick('website').into(websites);
// -> websites = { something: 'value', key: 'value', website: 'GitHub' }

```
