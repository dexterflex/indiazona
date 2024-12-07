import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteCategory,
	selectCategory,
	setCategory,
} from "../../redux/reducer";
import { deleteSubcategory } from "../../services/subcategory";
import CategoryDialog from "../Dialog/CategoryDialog";

const SubcategoriesTable = () => {
	const { data } = useSelector(selectCategory);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

	// Function to handle opening the dialog
	const handleDialogOpen = () => setOpen(true);

	// Function to handle closing the dialog
	const handleDialogClose = () => setOpen(false);

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch(
				"http://localhost:3000/api/v1/subcategories"
			);
			const data = await response.json();
			dispatch(setCategory(data.category));
		} catch (error) {
			console.error("Error fetching data:", error);
		}
		setLoading(false);
	};

	const deleteData = async (id) => {
		setLoading(true);
		try {
			await deleteSubcategory(id);
			dispatch(deleteCategory(id));
		} catch (error) {
			console.error("Error deleting data:", error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			{loading ?
				<p>Loading...</p>
			:	<TableContainer
					sx={{
						border: "1px solid rgba(228, 228, 228, 1)",
						borderRadius: "10px",
					}}>
					<Table>
						<TableHead>
							<TableRow sx={{ bgcolor: "white" }}>
								<TableCell
									sx={{
										color: "rgba(161, 161, 161, 1)",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "16.41px",
									}}>
									S.No.
								</TableCell>
								<TableCell
									sx={{
										color: "rgba(161, 161, 161, 1)",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "16.41px",
									}}>
									Category Name
								</TableCell>
								<TableCell
									sx={{
										color: "rgba(161, 161, 161, 1)",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "16.41px",
									}}>
									Sub-category Name
								</TableCell>
								<TableCell
									sx={{
										color: "rgba(161, 161, 161, 1)",
										fontSize: "14px",
										fontWeight: "500",
										lineHeight: "16.41px",
									}}>
									Option
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row, index) => (
								<TableRow
									key={row.id}
									sx={{
										bgcolor: index % 2 === 0 ? "white" : "#E6EDFF",
									}}>
									<TableCell>{index + 1} .</TableCell>
									<TableCell>{row.category}</TableCell>
									<TableCell>{row.subcategory}</TableCell>
									<TableCell>
										<IconButton onClick={handleDialogOpen}>
											<EditIcon sx={{ color: "rgba(63, 89, 163, 1)" }} />
										</IconButton>
										<CategoryDialog
											open={open}
											setOpen={setOpen}
											editData={row}
										/>
										<IconButton onClick={() => deleteData(row._id)}>
											<DeleteIcon sx={{ color: "rgba(255, 82, 82, 1)" }} />
										</IconButton>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			}
		</>
	);
};

export default SubcategoriesTable;
