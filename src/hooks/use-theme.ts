import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  const { theme, setTheme: toggleTheme } = context;
  return { theme, toggleTheme };
};

export default useTheme;
