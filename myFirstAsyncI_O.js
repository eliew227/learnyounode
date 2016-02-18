var fs = require("fs");

fs.readFile(process.argv[2], function (err, data) {
	var str = data.toString();
	var lineArray = str.split("\n");
	var lines = lineArray.length - 1;

	console.log(lines);
});

