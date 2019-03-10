#!/usr/bin/env node

// Imports
let http = require('http');

// Options
let port = parseInt(require('process').argv[2] || 80);

// Main
http.createServer(function (req, res, next) {

	let { url, headers } = req;
	let Ret = { url, headers };

	console.dir(Ret, {depth: null, colors: true});

	res.write(JSON.stringify(Ret, null, 2));
	res.statusCode = 200;
	res.end();

}).listen(port);
