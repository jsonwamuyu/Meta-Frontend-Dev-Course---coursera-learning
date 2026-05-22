import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const theme = {
    color: "blue",
    background: "lightgray",
  };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { useTheme };

export default ThemeProvider;
