const Job = require("../models/Job");

// Add a job
const addJob = async (req, res) => {
  try {
    const { company, role, status, date, link } = req.body;
    const job = new Job({ company, role, status, date: date || new Date(), link });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error adding job", error });
  }
};

// Get all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    const formattedJobs = jobs.map(job => ({
      ...job._doc,
      date: new Date(job.date).toISOString().split("T")[0]  // Format date to YYYY-MM-DD
    }));
    res.json(formattedJobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
};

// Update job status
const updateJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedJob = await Job.findByIdAndUpdate(id, { status }, { new: true });
    res.json(updatedJob);
  } catch (error) {
    res.status(500).json({ message: "Error updating job status", error });
  }
};

// Delete a job
const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    await Job.findByIdAndDelete(id);
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error });
  }
};

module.exports = { addJob, getJobs, updateJob, deleteJob };
