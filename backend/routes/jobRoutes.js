const express = require("express");
const router = express.Router();
const { addJob, getJobs, updateJob, deleteJob } = require("../controllers/jobController");

router.post("/", addJob);      // Add a job
router.get("/", getJobs);      // Get all jobs
router.put("/:id", updateJob); // Update job status
router.delete("/:id", deleteJob); // Delete a job

module.exports = router;
