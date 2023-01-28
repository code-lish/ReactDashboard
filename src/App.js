import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";

import { useSelector } from "react-redux";
import { selectTheme } from "./features/global/globalSlice";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { ToastContainer } from "react-toastify";
import { themeSettings } from "./theme";
import Contacts from "./pages/Contacts";
import Invoices from "./pages/Invoices";
import ManageTeam from "./pages/ManageTeam";
import Line from "./pages/chartPages/Line";
import Bar from "./pages/chartPages/Bar";
import Pie from "./pages/chartPages/Pie";
import AddContainer from "./pages/addContainer/AddContainer";

function App() {
  const mode = useSelector(selectTheme);
  const theme = createTheme(themeSettings(mode));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            {/*pages */}
            <Route path="add-container" element={<AddContainer />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="manageteam" element={<ManageTeam />} />

            {/* charts pages */}
            <Route path="line" element={<Line />} />
            <Route path="bar" element={<Bar />} />
            <Route path="pie" element={<Pie />} />

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
