import React from 'react';
import { useTheme } from '../../Hooks';
import './index.css';

const ThemeSwitch: React.FC = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="container">
      <label id="switch" className="switch">
        <input type="checkbox" id="slider" onChange={() => toggleTheme()} defaultChecked={theme === 'dark'} />
        <span className="slider round" />
      </label>
    </div>
  );
};

export default ThemeSwitch;
