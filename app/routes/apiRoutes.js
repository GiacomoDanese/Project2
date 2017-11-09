// Import Folder
var db = require("../models")

module.exports = function(app) {

	app.get("/api", function(req, res) {

		db.Components.findAll({}).then(function(data) {

			res.json(data);
		});
	});
}