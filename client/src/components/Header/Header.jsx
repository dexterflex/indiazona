import React from "react";
import { Box, Typography, Avatar } from "@mui/material";

const Header = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				py: 2,
				px: 4,
				bgcolor: "#fff",
				borderBottom: "1px solid #ddd",
			}}>
			<Typography
				variant='h6'
				sx={{
					fontSize: "20px",
					fontWeight: "600",
					lineHeight: "23.44px",
					textAlign: "left",
					color: "rgba(63, 89, 163, 1)",
				}}>
				Sub Categories
			</Typography>
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				<img
					src='notification.png'
					sx={{ width: "50px", height: "50px" }}
				/>
				<img
					src='lang.png'
					style={{
						width: "78px",
						height: "36px",
					}}
				/>
				<img
					src='adminLogo.png'
					style={{ width: "117px", height: "60px" }}
				/>
			</Box>
		</Box>
	);
};

export default Header;
