import React from "react";
import axios from "axios";
import "../styles/JobList.css";

const API_BASE_URL = `${process.env.REACT_APP_SERVER_URL}/api/jobs`;

export default function JobList({ jobs, fetchJobs }) {
  const updateStatus = async (id, status) => {
    await axios.put(`${API_BASE_URL}/${id}`, { status });
    fetchJobs();
  };

  const deleteJob = async (id) => {
    await axios.delete(`${API_BASE_URL}/${id}`);
    fetchJobs();
  };
  

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <div key={job._id} className="job-card">
          <h3>{job.company} - {job.role}</h3>
          <p><strong>Status:</strong> {job.status}</p>
          <p><strong>Date:</strong> {new Date(job.date).toLocaleDateString()}</p> 
          <a href={job.link} className="job-link" target="_blank" rel="noopener noreferrer">🔗 Job Link</a>
          <div className="actions">
          <select 
  value={""}  // Set default to empty so "Update Status" appears
  onChange={(e) => updateStatus(job._id, e.target.value)}
>
  <option value="" disabled>update status</option> {/* Placeholder */}
  <option value="Applied">Applied</option>
  <option value="Interview">Interview</option>
  <option value="Offer">Offer</option>
  <option value="Rejected">Rejected</option>
</select>

            <button onClick={() => deleteJob(job._id)} className="btn-delete"> Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
