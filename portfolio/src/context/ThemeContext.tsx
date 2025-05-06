import React, { createContext, useContext, ReactNode } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode: true }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 