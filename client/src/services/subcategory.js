import axios from "axios";

export const fetchSubcategories = async () => {
	const response = await axios.get(
		"https://indiazona-backend.onrender.com/api/v1/subcategories"
	);
	return response.data.category;
};

export const createSubcategory = async (data) => {
	console.log(data);
	const response = await axios.post(
		"https://indiazona-backend.onrender.com/api/v1/subcategories",
		data
	);
	return response.data;
};

export const updateSubcategory = async (id, data) => {
	const response = await axios.put(
		`https://indiazona-backend.onrender.com/api/v1/subcategories/${id}`,
		data
	);
	return response.data;
};

export const deleteSubcategory = async (id) => {
	const response = await axios.delete(
		`https://indiazona-backend.onrender.com/api/v1/subcategories/${id}`
	);
	return response.data;
};
