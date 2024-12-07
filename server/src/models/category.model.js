const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
	{
		category: {
			type: String,
			required: true,
			trim: true,
		},
		subcategory: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: {
			createdAt: "created_at",
			updatedAt: "updated_at",
		},
	}
);

module.exports = mongoose.model("Category", categorySchema);
