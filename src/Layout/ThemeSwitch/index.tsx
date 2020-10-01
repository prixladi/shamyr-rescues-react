import React from 'react';
import { useTheme } from '../../Hooks';
import './index.css';

const ThemeSwitch = () => {
  const [, toggleTheme] = useTheme();

  return (
    <div className="container">
      <label id="switch" className="switch">
        <input type="checkbox" id="slider" onChange={() => toggleTheme()} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ThemeSwitch;
