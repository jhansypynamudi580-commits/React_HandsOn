import React, { useState } from 'react';
import EmployeesList from './EmployeesList';
import ThemeContext from './ThemeContext';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const employees = [
    { id: 1, name: 'John Doe', position: 'Manager' },
    { id: 2, name: 'Jane Smith', position: 'Developer' },
    { id: 3, name: 'David Brown', position: 'Tester' }
  ];

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <h1>Employee Management Application</h1>

        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>

        <EmployeesList employees={employees} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;