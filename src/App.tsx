import { Route, Routes } from "react-router-dom";
import "./assets/sass/style.css";
import { Layout } from "./components/Layout.component";
import { MainPage } from "./pages/MainPage";
import { ProjectPage } from "./pages/ProjectPage";
import { ContactPage } from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projectPage/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
