const User = require("../models/User");
const { success, error } = require("../utils/responseWrapper");

const getUser = async (req, res) => {
	try {
		const users = await User.find({}).exec();
		res.send(users);
	} catch (e) {
		console.log(e);
		return res.send(error(500, e.message));
	}
};

const addUser = async (req, res) => {
	try {
		const { name, age, gender, mobile } = req.body;

		newUser = await User.create({
			name,
			age,
			gender,
			mobile,
		});

		return res.send(success(200, newUser));
	} catch (error) {
		console.log(e);
		return res.send(error(500, e.message));
	}
};

const updateUser = async (req, res) => {
	try {
		const id = req.params.id;
		if (!id) {
			return res.send(error(404, "No Id provided."));
		}
		const { name, age, gender, mobile } = req.body;
		const thisUser = await User.findById(id);

		if (!thisUser) {
			return res.send(error(404, "No such user exists."));
		}

		if (
			thisUser.name === name &&
			thisUser.age === age &&
			thisUser.gender === gender &&
			thisUser.mobile === mobile
		) {
			return res.send(
				success(200, `${name, age, gender, mobile} User already up-to-date.`)
			);
		}

		await User.updateOne({ _id: id }, { name, age, gender, mobile });
		return res.send(success(200, thisUser));
	} catch (e) {
		res.send(error(500, e));
	}
};

const deleteUser = async (req, res) => {
	try {
		const id = req.params.id;
		if (!id) {
			return res.send(error(404, "No Id provided."));
		}
		const thisUser = await User.findById(id);

		if (!thisUser) {
			return res.send(error(404, "No such user exists."));
		}
		await User.deleteOne({ _id: id });
		return res.send(success(200, `User with ID ${id} has been deleted`));
		// res.send(id);
	} catch (e) {
		res.send(error(500, e));
	}
};

module.exports = {
	getUser,
	addUser,
	updateUser,
	deleteUser,
};
