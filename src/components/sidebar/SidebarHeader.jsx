import { Box, useTheme, Typography } from "@mui/material";
import logo from "../../assets/img/logo.png";
import { useProSidebar } from "react-pro-sidebar";
const SidebarHeader = () => {
  const { collapsed } = useProSidebar();
  const theme = useTheme();
  return (
    <Box
      mb="25px"
      mt="15px"
      ml="10px"
      sx={{
        position: "sticky",
        top: "0",
        backgroundColor: theme.palette.bgColor[1000],
        zIndex: "1",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="start"
        alignItems="start"
      >
        <img
          alt="profile-user"
          width="60px"
          height="60px"
          src={logo}
          style={{ cursor: "pointer", borderRadius: "50%" }}
        />
        {!collapsed && (
          <Box textAlign="start" sx={{ ml: "10px" }}>
            <Typography
              variant="h2"
              color={theme.palette.grey[900]}
              fontWeight="bold"
            >
              Salero
            </Typography>
            <Typography
              variant="body2"
              color={theme.palette.grey[800]}
              sx={{ whiteSpace: "nowrap" }}
            >
              Resturant Dashboard
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SidebarHeader;
