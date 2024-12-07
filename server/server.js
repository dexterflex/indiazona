const dotenv = require("dotenv").config();
const express = require("express");
const categoryRouter = require("./src/routes");
const connectToDatabase = require("./src/config/db.config");
const cors = require("cors");

const app = express();
const port = process.env.PORT; // You can set this to any port you like

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Define a basic route
app.use("/api/v1/subcategories", categoryRouter);

// Start the server
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
	connectToDatabase();
});
