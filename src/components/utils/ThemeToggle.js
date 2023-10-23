// ThemeToggle.js
import React from 'react';
import { useTheme } from '../../styles/ThemeProvider';

function ThemeToggle({closeMenu}) {
  const { isDarkMode, toggleTheme } = useTheme();
  
  const handleClick = () => {
    toggleTheme();
    closeMenu();
  };

  return (
    <button onClick={handleClick} id="theme-toggle">
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default ThemeToggle;
