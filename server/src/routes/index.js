const express = require("express");
const {
	addCategory,
	editCategory,
	deleteCategory,
	getCategory,
} = require("../controllers/category.controller");
const categoryRouter = express.Router();

module.exports = categoryRouter;

// route for get categories
categoryRouter.get("/", getCategory);

// route for add category
categoryRouter.post("/", addCategory);

// route for edit category
categoryRouter.put("/:id", editCategory);

// route for delete category
categoryRouter.delete("/:id", deleteCategory);
