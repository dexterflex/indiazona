import React from "react";
import { Box, Button, TextField } from "@mui/material";
import AddButton from "../AddButton/AddButton";
import ImportExportIcon from "@mui/icons-material/ImportExport";

const SearchBar = () => {
	return (
		<Box
			marginTop={2}
			marginBottom={2}
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}>
			<TextField
				fullWidth
				placeholder='Search via name, mobile number or email ID'
				variant='outlined'
				size='small'
				sx={{ width: "600px" }}
			/>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Button
					sx={{
						border: "1px solid #bababa",
						color: "#A1A1A1",
					}}>
					<ImportExportIcon sx={{ padding: 0 }} />
				</Button>
				<AddButton />
			</Box>
		</Box>
	);
};

export default SearchBar;
