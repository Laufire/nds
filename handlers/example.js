// An example for custom handlers.

module.exports = (req, res) => {

	res.write('-');
	res.statusCode = 200;
	res.end();
}
