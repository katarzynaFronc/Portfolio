import { Route, Routes } from "react-router-dom";
import "./assets/sass/style.css";
import { Layout } from "./components/Layout.component";
import { MainPage } from "./pages/MainPage";
import { ProjectPage } from "./pages/ProjectPage";
import { FormPage } from "./pages/FormPage";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projectPage/:id" element={<ProjectPage />} />
          <Route path="/form" element={<FormPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
