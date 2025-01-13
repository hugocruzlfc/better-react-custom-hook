import "./App.css";
import Layout from "./components/layout";
import { ThemeProvider } from "./context/theme-context";
import { CatProvider } from "./context/cat-context";
import Header from "./components/header";
import { CatList } from "./components/cat-list";

import ModalWrapper from "./components/modal-wrapper";
import MainContent from "./components/main-content";

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        <CatProvider>
          <CatProvider>
            <Header />
            <MainContent>
              <ModalWrapper />
              <CatList />
            </MainContent>
          </CatProvider>
        </CatProvider>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
