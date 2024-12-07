import { createSlice } from "@reduxjs/toolkit";

let initialState = {
	data: [],
	categories: [
		{
			id: 1,
			name: "Automotive - Car Parts",
		},
		{
			id: 2,
			name: "Automotive - Cleaning Kits (Brush)",
		},
		{
			id: 3,
			name: "Automotive - Accessories (Seat Covers)",
		},
	],
};

const categorySlice = createSlice({
	name: "category",
	initialState,
	reducers: {
		addCategory: (state, action) => {
			state.data.push(action.payload);
		},
		setCategory: (state, action) => {
			state.data = action.payload;
		},
		editCategory: (state, action) => {
			const { id, newCategory } = action.payload;

			state.data = state.data.map((category) => {
				if (category._id === id) {
					return newCategory;
				}
				return category;
			});
		},
		deleteCategory: (state, action) => {
			state.data = state.data.filter(
				(category) => category._id !== action.payload
			);
		},
	},
});

export const selectCategory = (state) => state.category;
export const { setCategory, addCategory, editCategory, deleteCategory } =
	categorySlice.actions;
export default categorySlice.reducer;
