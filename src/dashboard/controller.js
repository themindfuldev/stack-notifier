function start(app) {
	app.get('/', function (req, res) {
	    res.render('dashboard');
	});
}

module.exports = {
	start: start
};