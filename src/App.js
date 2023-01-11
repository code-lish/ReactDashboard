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
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import AuthLayout from "./components/layout/AuthLayout";
import Faq from "./pages/FAQ/Faq";

function App() {
  const mode = useSelector(selectTheme);
  const theme = createTheme(themeSettings(mode));

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {/* Auth pages */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>

          {/* Dashboard pages */}
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Dashboard />} />

            {/* Data pages */}
            <Route path="contacts" element={<Contacts />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="manageteam" element={<ManageTeam />} />
            <Route path="faq" element={<Faq />} />

            {/* charts pages */}
            <Route path="line" element={<Line />} />
            <Route path="bar" element={<Bar />} />
            <Route path="pie" element={<Pie />} />
          </Route>
          {/* Not found page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
