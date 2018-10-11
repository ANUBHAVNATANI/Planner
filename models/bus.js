const mongoose = require("mongoose");

busSchema = mongoose.Schema({
	name : String,
	collegeBus : [{
		time : String,
		from : String,
		to : String,
		busNo : Number
	}]
	// govtBus : [{
	// 	time : String,
	// 	from : String,
	// 	to : String,
	// 	busNo : Number
	// }]
});

module.exports = mongoose.model("Bus", busSchema);