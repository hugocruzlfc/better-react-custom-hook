import { useState } from "react";
import "./App.css";
import Layout from "./components/layout";
import MainContent from "./components/main-content";
import { ThemeProvider } from "./context/theme-context";
import { CatProvider } from "./context/cat-context";
import Header from "./components/header";
import { CatList, TotallyDifferentCatList } from "./components/cat-list";
import Modal from "./components/modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <Layout>
        <CatProvider>
          <Header />
          <MainContent>
            <button onClick={() => setIsModalOpen(true)}>Add Cat</button>
            <CatList />
            <TotallyDifferentCatList />
            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            />
          </MainContent>
        </CatProvider>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
