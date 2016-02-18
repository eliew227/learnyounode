var http = require("http");
var urls = process.argv.slice(2);
var results = [];
var count = 0;

var getData = function (index) {
	http.get(urls[index], function(response) {
		var output = "";
		response.setEncoding("utf8");
		
		response.on("error", function(err){
			console.error(err);
		});
		
		response.on("data", function(data) {
			output += data;
		});
		
		response.on("end", function() {
			count++;
			results[index] = output;
			if (count === urls.length) {
				for (var i = 0; i < urls.length; i++) {
					console.log(results[i]);
				};
			};
		});
	});
};

for (var i = 0; i < urls.length; i++) {
	getData(i);
};