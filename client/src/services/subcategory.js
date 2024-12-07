import axios from "axios";

export const fetchSubcategories = async () => {
	const response = await axios.get(
		"http://localhost:3000/api/v1/subcategories"
	);
	return response.data.category;
};

export const createSubcategory = async (data) => {
	console.log(data);
	const response = await axios.post(
		"http://localhost:3000/api/v1/subcategories",
		data
	);
	return response.data;
};

export const updateSubcategory = async (id, data) => {
	const response = await axios.put(
		`http://localhost:3000/api/v1/subcategories/${id}`,
		data
	);
	return response.data;
};

export const deleteSubcategory = async (id) => {
	const response = await axios.delete(
		`http://localhost:3000/api/v1/subcategories/${id}`
	);
	return response.data;
};
