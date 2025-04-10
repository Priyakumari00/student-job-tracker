import React, { useState } from "react";
import axios from "axios";
import "../styles/JobForm.css";

const API_BASE_URL = `${process.env.REACT_APP_SERVER_URL}/api/jobs`;

export default function JobForm({ fetchJobs }) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [link, setLink] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!company || !role || !link || !date) {
      alert("Please fill in all fields");
      return;
    }

    await axios.post(API_BASE_URL, { company, role, link, status, date });
    scrollToBottom();

    fetchJobs();

    // Clear the form
    setCompany("");
    setRole("");
    setLink("");
    setStatus("");
    setDate("");

    

  };

  

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <h2>Add Job</h2>
      <input 
        type="text" 
        placeholder="Company Name" 
        value={company} 
        onChange={(e) => setCompany(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Role" 
        value={role} 
        onChange={(e) => setRole(e.target.value)} 
      />
      <input 
        type="url" 
        placeholder="Job Link" 
        value={link} 
        onChange={(e) => setLink(e.target.value)} 
      />
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
      />
  <select value={status} onChange={(e) => setStatus(e.target.value)}>
  <option value="" disabled hidden>Select Status</option>
  <option value="Applied">Applied</option>
  <option value="Interview">Interview</option>
  <option value="Offer">Offer</option>
  <option value="Rejected">Rejected</option>
</select>


      <button type="submit" className="btn-primary">Add Job</button>
    </form>
  );
}
