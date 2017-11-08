module.exports = {
	render: function(req, res) {
	res.render('index', {
		item_type: "processor",
		item_name: "name",
		item_img: "https://cdn.pcpartpicker.com/static/forever/images/product/78d5a83458df76aaff6112c60d482ff2.1600.jpg",
		item_price: "$100.00"
	});
	}
};