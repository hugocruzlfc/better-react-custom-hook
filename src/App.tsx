import "./App.css";
import Layout from "./components/layout";
import MainContent from "./components/main-content";
import { ThemeProvider } from "./context/theme-context";
import { CatProvider } from "./context/cat-context";
import Header from "./components/header";
import ModalWrapper from "./components/modal-wrapper";
import CatList from "./components/cat-list";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <CatProvider>
          <Header />
          <MainContent>
            <ModalWrapper />
            <CatList />
          </MainContent>
        </CatProvider>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
