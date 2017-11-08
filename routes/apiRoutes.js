// var testApiController = require('../controllers/testApi');
// module.exports = function(app) {
//   app.get('/test', testApiController.index);
// };
// apiRoutes
var db = require("../models");

module.exports = function(app) {
	app.get("/api", function(req, res) {
		db.Components.findAll({}).then(function(data) {
			res.render("index", {stuff:data});

			console.log(data);
		})
	})
}