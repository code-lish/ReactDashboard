import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Box } from "@mui/material";
const Layout = () => {
  return (
    <Box display="flex" width="100%" height="100%">
      <Sidebar />
      <Box flexGrow={1}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
