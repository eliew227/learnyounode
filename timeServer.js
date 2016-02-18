var net = require("net");
var port = process.argv[2];

var addZeroes = function (num, lengthToBe) {
	var output = "";
	var length = num.toString().length;
	if (length < lengthToBe) {
		var zeroesToAdd = lengthToBe - length;
		for (var i = 0; i < zeroesToAdd; i++) {
			output += "0";
		};
	};
	return output + num;
};

var dateNow = function () {
	var date = new Date();
	var year = addZeroes(date.getFullYear(), 4);
	var month = addZeroes(date.getMonth() + 1, 2);
	var day = addZeroes(date.getDate(), 2);
	var hour = addZeroes(date.getHours(), 2);
	var minute = addZeroes(date.getMinutes(), 2);
	var formattedDate = year + "-" + month + "-" + day + " " + hour + ":" + minute;

	return formattedDate;
}


var server = net.createServer(function(socket) {
	socket.end(dateNow() + "\n");
});

server.listen(port);