var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

// Config
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Controllers
var dashboardController = require('./dashboard/controller');
dashboardController.start(app);

// Startup
app.listen(8080, function(){
  console.log('Listening on port 8080...');
});