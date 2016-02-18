var output = 0;
var arguments = process.argv.slice(2);

for (var i = 0; i < arguments.length; i++) {
	output += Number(arguments[i]);
}

console.log(output);