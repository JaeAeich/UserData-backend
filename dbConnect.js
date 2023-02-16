const mongoose = require("mongoose");

module.exports = async () => {
	const mongoUri =
		"mongodb+srv://JaeAeich:c6yfMkBlGR95T2zf@cluster0.yt4llat.mongodb.net/test";

	try {
		const connect = await mongoose.connect(mongoUri, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});

		console.log(`MongoDB connected: ${connect.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
