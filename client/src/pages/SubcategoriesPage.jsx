import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import Sidebar from "../components/Sidebar/Sidebar";
import SubcategoriesTable from "../components/SubcategoriesTable/SubcategoriesTable";

const SubcategoriesPage = () => {
	return (
		<Box sx={{ display: "flex", height: "100vh" }}>
			<Sidebar />
			<Box
				sx={{
					flex: 1,
					display: "flex",
					flexDirection: "column",
					bgcolor: "#F9F9F9",
				}}>
				<Header />
				<Box sx={{ py: 2, px: 4 }}>
					<Typography
						variant='subtitle2'
						color='#A1A1A1'
						marginBottom={2}>
						Sub-categories
					</Typography>
					<Typography
						variant='caption1'
						sx={{
							fontSize: "20px",
							fontWeight: "600",
							lineHeight: "23.44px",
						}}>
						All Sub-categories
					</Typography>
					<SearchBar />

					<SubcategoriesTable />
				</Box>
			</Box>
		</Box>
	);
};

export default SubcategoriesPage;
