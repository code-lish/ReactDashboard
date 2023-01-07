import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { useTheme, Box } from "@mui/material";
import {
  DashboardOutlined,
  MarkUnreadChatAltOutlined,
  RestaurantMenuOutlined,
  PeopleAltOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import SidebarItem from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";

const LeftSidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState("Dashboard");
  const { collapsed } = useProSidebar();
  const sidebarItems = [
    {
      title: "Dashboard",
      to: "/",
      icon: (
        <DashboardOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Orders",
      to: "/orders",
      icon: (
        <MarkUnreadChatAltOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Menus",
      to: "/menu",
      icon: (
        <RestaurantMenuOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Customers",
      to: "/customers",
      icon: (
        <PeopleAltOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Charts",
    },
    {
      title: "BarChart",
      to: "/bar",
      icon: (
        <BarChartOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "PieChart",
      to: "/pie",
      icon: (
        <PieChartOutlineOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "LineChart",
      to: "/line",
      icon: (
        <TimelineOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
  ];

  return (
    <Box sx={{ height: "100vh" }}>
      <Sidebar
        style={{
          height: "100%",
          borderRight: "none",
          borderLeft: "none",
        }}
        breakPoint="md"
        backgroundColor={theme.palette.bgColor[1000]}
        rootStyles={{
          ".ps-menuitem-root": {
            padding: collapsed ? "5px 4px" : "5px 20px 5px 10px",
          },
          ".ps-active > a": {
            color: theme.palette.primary[1000],
          },
          ".ps-active .ps-menu-icon > svg": {
            color: theme.palette.primary[1000],
          },
          ".ps-menu-button": {
            "&:hover": {
              backgroundColor: theme.palette.light.main,
              color: theme.palette.primary[1000],
              fontWeight: "bold",
              borderRadius: "50px",
            },
            "&:hover > .ps-menu-icon > svg": {
              color: theme.palette.primary[1000],
            },
          },
        }}
      >
        <SidebarHeader />
        <Menu
          style={{ marginTop: "25px" }}
          menuItemStyles={{
            button: ({ level, active, disabled, ...rest }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled
                    ? theme.palette.error.main
                    : theme.palette.black.main,
                  backgroundColor: active && theme.palette.light.main,

                  fontWeight: active && "bold",
                  borderRadius: "100px",
                };
            },
          }}
        >
          {sidebarItems.map((item, _) => {
            return <SidebarItem item={item} key={_} />;
          })}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default LeftSidebar;