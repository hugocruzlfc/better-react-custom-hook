import useTheme from "../hooks/use-theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  return <div className={theme}>{children}</div>;
};

export default Layout;
