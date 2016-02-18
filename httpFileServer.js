var fs = require("fs");
var http = require("http");

var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function (request, response) {
	response.writeHead(200);
	var input = fs.createReadStream(file);
	input.pipe(response);
});
server.listen(port);