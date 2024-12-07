const Category = require("../models/category.model");

// Function for handling add category request
exports.addCategory = async (category) => {
	const newCategory = new Category(category);
	return await newCategory.save();
};

// Function for handling edit category request
exports.editCategory = async (id, category) => {
	return await Category.findByIdAndUpdate(id, category, { new: true });
};

// Function for handling delete category request
exports.deleteCategory = async (id) => {
	return await Category.findByIdAndDelete(id);
};
// Function for handling get category request
exports.getCategory = async () => {
	return await Category.find();
};
