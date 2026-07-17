import './App.css';
import { useState } from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {

  const [student, setStudent] = useState({
    Name: "",
    School: "",
    Total: "",
    goal: ""
  });


  const handleChange = (event) => {

    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });

  };


  return (
    <div>

      <h1>Student Management Portal</h1>

      <input
        type="text"
        name="Name"
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="School"
        placeholder="Enter School"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="Total"
        placeholder="Enter Total Marks"
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="goal"
        placeholder="Enter Number of Subjects"
        onChange={handleChange}
      />

      <br /><br />


      <CalculateScore
        Name={student.Name}
        School={student.School}
        Total={student.Total}
        goal={student.goal}
      />

    </div>
  );
}

export default App;