// A handler that redirects all the requests to the route, /ping.

module.exports = (req, res) => {

	if(req.url == '/ping') {

		res.write('pong');
	}
	else {

		res.writeHead(302, {
			'Location': '/ping'
		});
	}

	res.end();
}
