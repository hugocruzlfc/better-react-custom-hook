import useTheme from "../hooks/use-theme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>CatApp</h1>
      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export default Header;
