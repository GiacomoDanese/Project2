// var testApiController = require('../controllers/testApi');
// module.exports = function(app) {
//   app.get('/test', testApiController.index);
// };
// apiRoutes
var db = require("../models");

module.exports = function(app) {
	app.get("/api/worm", function(req, res) {
		db.Components.findAll({
			where: {
				item_tier: 1
			}
		}).then(function(data) {
			res.render("index", {stuff:data});

			console.log(data);
		})
	});



	app.get("/api/plant", function(req, res) {
		db.Components.findAll({
			where: {
				item_tier: 2
			}
		}).then(function(data) {
			res.render("index", {stuff:data});

			console.log(data);
		})
	});



	app.get("/api/human", function(req, res) {
		db.Components.findAll({
			where: {
				item_tier: 3
			}
		}).then(function(data) {
			res.render("index", {stuff:data});

			console.log(data);
		})
	});



	app.get("/api/zeus", function(req, res) {
		db.Components.findAll({
			where: {
				item_tier: 4
			}
		}).then(function(data) {
			res.render("index", {stuff:data});

			console.log(data);
		})
	});
}




