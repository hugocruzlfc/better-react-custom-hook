import ThemeToggleButton from "./theme-toggle-button";

const Header = () => {
  console.log("Header rendered!");

  return (
    <header className="header">
      <h1>CatApp</h1>
      <ThemeToggleButton />
    </header>
  );
};

export default Header;
