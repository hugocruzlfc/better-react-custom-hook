import React from "react";
import useTheme from "../hooks/use-theme";

const ThemeToggleButton = React.memo(() => {
  const { theme, toggleTheme } = useTheme();

  console.log("ThemeToggleButton rendered!");

  return (
    <button onClick={() => toggleTheme}>
      {theme === "light" ? "Dark Mode" : "Light Mode"}
    </button>
  );
});

export default ThemeToggleButton;
