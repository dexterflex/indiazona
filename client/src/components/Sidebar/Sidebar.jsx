import AttachFileIcon from "@mui/icons-material/AttachFile";
import BarChartIcon from "@mui/icons-material/BarChart";
import BrushIcon from "@mui/icons-material/Brush";
import CampaignIcon from "@mui/icons-material/Campaign";
import CategoryIcon from "@mui/icons-material/Category";
import ChatIcon from "@mui/icons-material/Chat";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import GroupIcon from "@mui/icons-material/Group";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import PeopleIcon from "@mui/icons-material/People";
import ReplayIcon from "@mui/icons-material/Replay";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WebIcon from "@mui/icons-material/Web";
import {
	Box,
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const NAVIGATION = [
	{ title: "Dashboard", icon: <HomeIcon /> },
	{ title: "Partner", icon: <GroupIcon /> },
	{ title: "Product", icon: <ShoppingCartIcon /> },
	{ title: "Sales", icon: <TrendingUpIcon /> },
	{
		title: "Items",
		icon: <CategoryIcon />,
		children: [
			{ title: "Categories" },
			{ title: "Sub-categories" },
			{ title: "Specification" },
			{ title: "HSN List" },
			{ title: "Logistics Rate" },
			{ title: "Brand List" },
		],
	},
	{ title: "Refunds", icon: <ReplayIcon /> },
	{ title: "Customers", icon: <PeopleIcon /> },
	{ title: "Sellers", icon: <LockIcon /> },
	{ title: "Reports", icon: <BarChartIcon /> },
	{ title: "Uploaded Files", icon: <AttachFileIcon /> },
	{ title: "Blog System", icon: <ChatIcon /> },
	{ title: "Doodle", icon: <BrushIcon /> },
	{ title: "Marketing", icon: <CampaignIcon /> },
	{ title: "Support", icon: <HeadsetMicIcon /> },
	{ title: "Website Setup", icon: <WebIcon /> },
	{ title: "Staff Management", icon: <GroupAddIcon /> },
];

const Sidebar = () => {
	const [openSections, setOpenSections] = useState({});
	const [activeItem, setActiveItem] = useState(null);

	const toggleSection = (title) => {
		setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
	};

	const handleItemClick = (title) => {
		setActiveItem(title);
	};

	const renderMenuItems = (items, isChild = false) => {
		return items.map((item) => (
			<>
				<ListItem
					button
					key={item.title}
					onClick={() => {
						item.children ?
							toggleSection(item.title)
						:	handleItemClick(item.title);
					}}
					sx={{
						backgroundColor:
							openSections[item.title] && !isChild ?
								"rgba(246, 246, 246, 1)" // Expanded parent background
							: activeItem === item.title ?
								isChild ?
									"rgba(255, 240, 222, 1)" // Selected child background
								:	"rgba(246, 246, 246, 1)" // Selected parent background
							:	"transparent",
						color:
							openSections[item.title] && !isChild ?
								"#E67700" // Expanded parent text
							: activeItem === item.title ?
								isChild ?
									"#E65100" // Selected child text
								:	"#E67700" // Selected parent text
							:	"rgba(161, 161, 161, 1)",
						"&:hover": {
							backgroundColor: isChild ? "#FFE4B5" : "#F5F5F5",
							color: "#E67700",
						},
						fontFamily: "Roboto",
						fontSize: "16px",
						fontWeight: "500",
						lineHeight: "18.75px",

						borderRadius: "5px",
					}}>
					<ListItemIcon
						sx={{
							color:
								openSections[item.title] && !isChild ? "#E67700"
								: activeItem === item.title ?
									isChild ? "#E65100"
									:	"#E67700"
								:	"inherit",
							marginRight: "-15px",
						}}>
						{item.icon || <SubdirectoryArrowRightIcon />}
					</ListItemIcon>
					<ListItemText primary={item.title} />
					{item.children &&
						(openSections[item.title] ?
							<ExpandLessIcon />
						:	<ExpandMoreIcon />)}
				</ListItem>
				{item.children && (
					<Collapse
						in={openSections[item.title]}
						timeout='auto'
						unmountOnExit>
						<List
							component='div'
							disablePadding
							sx={{ pl: 2 }}>
							{renderMenuItems(item.children, true)}
						</List>
					</Collapse>
				)}
			</>
		));
	};

	return (
		<Box
			sx={{
				width: 300,
				height: "100vh",
				overflowY: "auto",
				boxShadow: "0 4px 8px #a1a1a1",
				position: "sticky",
				zIndex: 100,
				scrollbarWidth: "none",
			}}>
			<Box sx={{ padding: "20px 0px 0 30px" }}>
				<img
					src='logo.png'
					alt='Logo'
				/>
			</Box>
			<List
				sx={{
					padding: "10px",
				}}>
				{renderMenuItems(NAVIGATION)}
			</List>
		</Box>
	);
};

export default Sidebar;
