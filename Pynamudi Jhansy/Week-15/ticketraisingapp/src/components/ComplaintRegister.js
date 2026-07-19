import React, { useState } from "react";

function ComplaintRegister() {

  const [employeeName, setEmployeeName] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();

    const referenceNumber =
      "COMP" + Math.floor(Math.random() * 100000);

    alert(
      "Complaint Submitted Successfully!\n\nReference Number: "
      + referenceNumber
    );

    setEmployeeName("");
    setComplaint("");

  };


  return (
    <div>

      <h2>Complaint Register</h2>

      <form onSubmit={handleSubmit}>

        <label>Employee Name:</label>
        <br />

        <input
          type="text"
          value={employeeName}
          onChange={(e) => setEmployeeName(e.target.value)}
          placeholder="Enter employee name"
          required
        />

        <br /><br />


        <label>Complaint:</label>
        <br />

        <textarea
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
          placeholder="Enter complaint"
          rows="5"
          required
        />

        <br /><br />


        <button type="submit">
          Submit Complaint
        </button>

      </form>

    </div>
  );
}

export default ComplaintRegister;