import { Cancel } from "@mui/icons-material";
import { Box, IconButton, MenuItem, Select, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import {
	createSubcategory,
	updateSubcategory,
} from "../../services/subcategory";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, editCategory, selectCategory } from "../../redux/reducer";

const CategoryDialog = ({
	open,
	setOpen,
	editData = false,
	setEditData = false,
}) => {
	const { categories } = useSelector(selectCategory);
	const [data, setData] = useState({ category: "", subcategory: "" });
	const dispatch = useDispatch();

	useEffect(() => {
		if (editData) {
			setData(editData);
		}
	}, [editData]);

	const handleCategoryChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleClose = () => {
		if (editData) {
			setEditData(null);
		}
		setData({ category: "", subcategory: "" });
		setOpen(false);
	};

	const handleSave = async () => {
		try {
			if (data._id) {
				let response = await updateSubcategory(data._id, data);
				dispatch(
					editCategory({ id: data._id, newCategory: response.category })
				);
			} else {
				let response = await createSubcategory(data);
				dispatch(addCategory(response.category));
			}
			handleClose();
		} catch (error) {
			console.error("Error creating subcategory:", error);
		}
	};

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{ transition: "all 0.3s ease-in-out" }}>
			<Box
				sx={{
					width: "600px",
					backgroundColor: "linear-gradient(135deg, #6e7e9e, #a1b4c1)", // gradient background
					borderRadius: "10px",
					boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)", // soft shadow
					overflow: "hidden",
					padding: "10px 40px",
				}}>
				<DialogTitle
					sx={{
						fontSize: "20px",
						fontWeight: "500",
						lineHeight: "23.44px",
						textAlign: "center",
						color: "rgba(27, 33, 40, 1)",
					}}>
					Add new sub category
				</DialogTitle>
				<DialogContent
					sx={{
						backgroundColor: "#ffffff",
						textAlign: "center",
					}}>
					<Typography
						variant='subtitle2'
						textAlign='left'>
						Category *
					</Typography>
					<Select
						fullWidth
						variant='outlined'
						value={data.category}
						name='category'
						onChange={handleCategoryChange}
						sx={{ marginBottom: "10px" }}>
						{/* Add MenuItem options */}
						{categories.map((category) => (
							<MenuItem value={category.name}>{category.name}</MenuItem>
						))}
					</Select>

					<Typography
						variant='subtitle2'
						textAlign={"left"}>
						Sub-category Name *
					</Typography>
					<TextField
						fullWidth
						variant='outlined'
						value={data.subcategory}
						name='subcategory'
						onChange={handleCategoryChange}
						sx={{ marginBottom: "10px" }}
					/>
					<Button
						variant='contained'
						color='primary'
						textAlign='center'
						onClick={handleSave}
						sx={{
							backgroundColor: "rgba(63, 89, 163, 1)",
							height: "40px",
							width: "126px",
						}}>
						Save
					</Button>
					<IconButton
						sx={{ position: "absolute", top: 10, right: 10 }}
						onClick={handleClose}>
						<Cancel />
					</IconButton>
				</DialogContent>
			</Box>
		</Dialog>
	);
};

export default CategoryDialog;
