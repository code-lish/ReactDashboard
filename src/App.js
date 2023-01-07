import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";

import { useSelector } from "react-redux";
import { selectTheme } from "./features/global/globalSlice";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { ToastContainer } from "react-toastify";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector(selectTheme);
  const theme = createTheme(themeSettings(mode));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* Not found page */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
