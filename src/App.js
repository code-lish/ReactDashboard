import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Not found page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
