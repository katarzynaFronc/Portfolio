import { Route, Routes } from "react-router-dom";
import "./assets/sass/style.css";
import { Layout } from "./components/Layout.component";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
