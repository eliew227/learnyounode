var http = require("http");
var url = require("url");

var port = process.argv[2];

var server = http.createServer(function(request, response) {
    var reqUrl = url.parse(request.url, true);
    var path = reqUrl.pathname;
    var isoTime = reqUrl.query.iso;
    var date = new Date(isoTime);
    var output = {};

    if (path === "/api/parsetime") {
        output.hour = date.getHours();
        output.minute = date.getMinutes();
        output.second = date.getSeconds();
    } else if (path === "/api/unixtime") {
        output.unixtime = date.getTime();
    };

    if (Object.keys(output).length !== 0) {
        response.writeHead(200, {
            "Content-Type": "application/json" 
        });
        response.end(JSON.stringify(output));
    } else {
        response.writeHead(404);
        response.end();
    };
});
server.listen(port);