var http = require("http");

var port = process.argv[2];

var server = http.createServer(function(request, response) {
    if (request.method === "POST") {
        var output = "";
        request.on("data", function(data){
            output += data;
        });
        request.on("end", function() {
            response.end(output.toUpperCase());
        });
    } else {
        response.end("Not using POST");
    };
});
server.listen(port);