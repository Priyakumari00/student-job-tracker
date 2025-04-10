require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");
const cors = require("cors");


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/jobs", require("./routes/jobRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
