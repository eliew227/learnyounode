var fs = require("fs");
var path = require("path");

module.exports = function(directory, fileType, func) {
	fs.readdir(directory, function(err, list) {
		if (err) {
			return func(err);
		};
		var filteredList = list.filter(function(file) {
			return path.extname(file) === "." + fileType;
		});
		func(null, filteredList);
	});
};