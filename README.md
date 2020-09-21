# SimpleNodeJSModule
Create folder
Run

```ruby
npm init
```

Package.json:

```ruby
{
  "name": "ex1",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index"
  },
  "author": "",
  "license": "ISC"
}
```


Create file index.js

```ruby
const rect = require("./rectangle");

function solveRect(w, h) {
  console.log("w = " + w + " h = " + h);
  console.log("area = " + rect.area(w, h));
  console.log("perimetr = " + rect.perimetr(w, h));
}

solveRect(5, 2);

```

Create file rectangle.js

```ruby
module.exports = {
  perimetr: (x, y) => 2 * (x + y),
  area: (x, y) => x * y,
};
```
