var filter = require("./makeItModular_filter.js");
var directory = process.argv[2];
var fileType = process.argv[3];

filter(directory, fileType, function(err, list) {
	if (err) {
		return console.error(err);
	};
	for (var i = 0; i < list.length; i++) {
		console.log(list[i]);
	};
});