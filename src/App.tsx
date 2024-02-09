import { Route, Routes } from "react-router-dom";
import "./assets/sass/style.css";
import { Layout } from "./components/Layout.component";
import { MainPage } from "./pages/MainPage";
import { ProjectPage } from "./pages/ProjectPage";
import { apiData } from "./api/index.endpoint";

function App() {
  console.log(apiData());
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projectPage/:id" element={<ProjectPage />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
