import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      setTheme('dark');
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="flex items-center">
      <span className="mr-2 text-black dark:text-white">Light</span>
      <Switch 
        checked={theme === 'dark'} 
        onChange={toggleTheme} 
        color="default" 
      />
      <span className="ml-2 text-black dark:text-white">Dark</span>
    </div>
  );
};

export default ThemeToggle;
