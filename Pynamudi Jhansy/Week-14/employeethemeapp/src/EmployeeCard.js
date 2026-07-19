import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  const showDetails = () => {
    alert(
      `Employee Name: ${employee.name}\nPosition: ${employee.position}`
    );
  };

  return (
    <div className="card">
      <h3>{employee.name}</h3>
      <p>{employee.position}</p>

      <button className={theme} onClick={showDetails}>
        View Profile
      </button>
    </div>
  );
}

export default EmployeeCard;