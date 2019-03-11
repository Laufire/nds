#!/usr/bin/env node

// Imports
const http = require('http');
const Argv = require('process').argv;

// Options
const port = parseInt(Argv[2] || 80);
const pretty = ((Argv[3] || 'y') === 'y');

/* Helpers */
const stringify = pretty ?
	(Obj) => JSON.stringify(Obj, null, 2) :
	(Obj) => JSON.stringify(Obj);

const logToConsole = pretty ?
	(Obj) => console.dir(Obj, {depth: null, colors: true}) :
	(Obj) => console.log(stringify(Obj));

const defaultHandler = (req, res, next) => {

	let { url, headers } = req;
	let Ret = { url, headers };

	logToConsole(Ret);

	res.write(stringify(Ret));
	res.statusCode = 200;
	res.end();
}

// Main
http.createServer(defaultHandler).listen(port);
