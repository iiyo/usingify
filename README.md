# usingify

This module reads dependencies from a package.json file and produces some JavaScript to
make the dependencies available in [using.js](https://github.com/iiyo/using.js).

To use this with browserify, just browserify the JS produced by usingify.

## Installation

    npm install -g usingify


## Command line usage

    usingify package.json > dependencies.js

## Using the JavaScript API

You can use the `usingify(package)` function to read the parsed contents of a package.json file:

```javascript
var usingify = require("usingify").usingify;
var fs = require("fs");
var file = "" + fs.readFileSync("package.json");
var package = JSON.parse(file);

fs.writeFileSync("dependencies.js", usingify(package));
```

Or you can use the `toUsing(moduleName)` function when you get your list of dependencies from elsewhere:

```javascript
var toUsing = require("usingify").toUsing;
var dependencies = "";

["xmugly", "eases", "transform-js"].forEach(function (name) {
    dependencies += "\n" + toUsing(name) + "\n";
});
```
