var fs = require("fs");

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var lineArray = str.split("\n");
var lines = lineArray.length - 1;

console.log(lines);
