const categoryRepository = require("../repositories/category.repository");

// Function for handling add category request
exports.addCategory = async (req, res) => {
	try {
		console.log(req.body);
		const category = await categoryRepository.addCategory(req.body);

		res.status(201).send({ message: "Category added successfully", category });
	} catch (error) {
		res.status(500).send(error);
	}
};

// Function for handling edit category request
exports.editCategory = async (req, res) => {
	try {
		const category = await categoryRepository.editCategory(
			req.params.id,
			req.body
		);
		res
			.status(200)
			.send({ message: "Category updated successfully", category });
	} catch (error) {
		res.status(500).send(error);
	}
};

// Function for handling delete category request
exports.deleteCategory = async (req, res) => {
	try {
		let category = await categoryRepository.deleteCategory(req.params.id);
		if (category === null) {
			return res.status(404).send({ message: "Category not found" });
		}
		res.status(200).send({ message: "Category deleted successfully" });
	} catch (error) {
		res.status(500).send(error);
	}
};

// Function for handling get category request
exports.getCategory = async (req, res) => {
	try {
		const category = await categoryRepository.getCategory();
		res
			.status(200)
			.send({ message: "Category fetched successfully", category });
	} catch (error) {
		res.status(500).send(error);
	}
};
