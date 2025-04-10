import React, { useState, useEffect } from "react";
import axios from "axios";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";
import "../styles/JobTracker.css";

const API_BASE_URL = `${process.env.REACT_APP_SERVER_URL}/api/jobs`;

export default function JobTracker() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const response = await axios.get(API_BASE_URL);
    setJobs(response.data);
  };

  return (
    <div className="job-tracker">
      <h1>Student Job Tracker</h1>
      <JobForm fetchJobs={fetchJobs} />
      <JobList jobs={jobs} fetchJobs={fetchJobs} />
    </div>
  );
}
