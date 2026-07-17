import React from "react";

function StudentProfile(props) {

  return (
    <div>
      <h2>Student Profile</h2>

      <p>Name: {props.name}</p>
      <p>Department: {props.department}</p>
      <p>Year: {props.year}</p>

    </div>
  );
}

export default StudentProfile;