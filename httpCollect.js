var http = require("http");
var url = process.argv[2];

http.get(url, function(response) {
	var output = "";
	response.setEncoding("utf8");
	
	response.on("error", function(err) {
		console.error("error");
	});

	response.on("data", function(data) {
		output += data;
	});

	response.on("end", function() {
		console.log(output.length);
		console.log(output);
	});
});