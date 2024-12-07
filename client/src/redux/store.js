import { configureStore } from "@reduxjs/toolkit";

import category from "./reducer.js";

const store = configureStore({
	reducer: {
		category,
	},
});

export default store;
