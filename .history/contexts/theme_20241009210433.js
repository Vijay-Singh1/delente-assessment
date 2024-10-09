// contexts/ThemeProvider.js
import { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize theme based on the cookie value or default to 'light'
  const [theme, setTheme] = useState(() => {
    // Check cookie first
    const savedTheme = Cookies.get('theme');
    return savedTheme || 'light'; // Fallback to 'light' if no cookie found
  });

  useEffect(() => {
    // Update localStorage and cookies whenever the theme changes
    localStorage.setItem('theme', theme);
    Cookies.set('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
