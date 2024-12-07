import React from "react";
import SubcategoriesPage from "./pages/SubcategoriesPage";
import { useSelector } from "react-redux";

function App() {
	const { data } = useSelector((state) => state.category);
	return <SubcategoriesPage />;
}

export default App;
