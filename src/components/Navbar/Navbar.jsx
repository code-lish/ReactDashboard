import { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
  NotificationsNoneOutlined,
  MarkUnreadChatAltOutlined,
} from "@mui/icons-material";
import FlexBetween from "../FlexBetween";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import profile from "../../assets/img/profile.jpeg";
import { useProSidebar } from "react-pro-sidebar";
const Navbar = () => {
  const theme = useTheme();
  const { collapseSidebar, toggleSidebar } = useProSidebar();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <AppBar
      sx={{
        position: "static",
        background: `none`,
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          {/* Side bar collapse sidebar button */}
          <IconButton
            sx={{ mr: "10px", display: { xs: "none", md: "flex" } }}
            onClick={() => {
              collapseSidebar();
            }}
          >
            <MenuIcon
              sx={{ fontSize: "25px", color: theme.palette.primary.main }}
            />
          </IconButton>
          {/* Toggle sidebar button */}
          <IconButton
            sx={{ mr: "10px", display: { md: "none" } }}
            onClick={() => {
              collapseSidebar(true);
              toggleSidebar();
            }}
          >
            <MenuIcon
              sx={{ fontSize: "25px", color: theme.palette.primary.main }}
            />
          </IconButton>

          {/* Search input */}
          <FlexBetween
            backgroundColor={theme.palette.light.main}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
            }}
          >
            <InputBase placeholder="Search..." />

            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => console.log(212)}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined
                sx={{ fontSize: "25px", color: theme.palette.primary.main }}
              />
            ) : (
              <LightModeOutlined
                sx={{ fontSize: "25px", color: theme.palette.primary.main }}
              />
            )}
          </IconButton>

          <IconButton>
            <SettingsOutlined
              sx={{ fontSize: "25px", color: theme.palette.primary.main }}
            />
          </IconButton>

          <IconButton>
            <NotificationsNoneOutlined
              sx={{ fontSize: "25px", color: theme.palette.primary.main }}
            />
          </IconButton>

          <IconButton>
            <MarkUnreadChatAltOutlined
              sx={{ fontSize: "25px", color: theme.palette.primary.main }}
            />
          </IconButton>

          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component="img"
                alt="profile"
                src={profile}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />

              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.grey[900] }}
                >
                  {"Sara"}
                </Typography>
                <Typography
                  fontSize="0.75rem"
                  sx={{ color: theme.palette.grey[800] }}
                >
                  {"Manager"}
                </Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.grey[800], fontSize: "25px" }}
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            >
              <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
