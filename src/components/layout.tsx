import useTheme from "../hooks/use-theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return <div className={`app-wrapper ${theme}`}>{children}</div>;
};

export default Layout;
