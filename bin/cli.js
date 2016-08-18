#!/usr/bin/env node

/* global require, process */

var fs = require("fs");
var usingify = require("../src/usingify").usingify;
var args = process.argv;
var path = args[2];

if (args.length < 3) {
    console.log("Usage: usingify [path to package.json file]");
}
else {
    console.log(usingify(JSON.parse("" + fs.readFileSync(path))));
}
