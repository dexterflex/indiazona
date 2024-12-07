import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import React, { useState } from "react";
import CategoryDialog from "../Dialog/CategoryDialog"; // Assuming CategoryDialog is in the same directory

const AddButton = () => {
	const [open, setOpen] = useState(false);

	// Function to handle opening the dialog
	const handleDialogOpen = () => setOpen(true);

	// Function to handle closing the dialog
	const handleDialogClose = () => setOpen(false);

	return (
		<div>
			<Button
				variant='contained'
				startIcon={<AddIcon />}
				sx={{
					backgroundColor: "rgba(63, 89, 163, 1)",
					fontSize: "14px",
					fontWeight: "600",
					// lineHeight: "16.41px",
				}}
				onClick={handleDialogOpen}>
				Add New Sub-category
			</Button>
			{/* Pass open and setOpen as props to CategoryDialog */}
			<CategoryDialog
				open={open}
				setOpen={setOpen}
			/>
		</div>
	);
};

export default AddButton;
