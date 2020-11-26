import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';
type HookType = () => [Theme, () => void];

const useTheme: HookType = () => {
  const [theme, setTheme] = useState((localStorage.getItem('theme') || 'dark') as Theme);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return [theme, toggleTheme];
};

export default useTheme;
