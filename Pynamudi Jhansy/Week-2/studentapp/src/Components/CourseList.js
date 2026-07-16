import React from "react";

function CourseList() {

  const courses = [
    "Angular",
    "React",
    "Java",
    "Python",
    "SQL"
  ];

  return (
    <div>
      <h2>Available Courses</h2>

      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>

    </div>
  );
}

export default CourseList;