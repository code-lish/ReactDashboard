import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import {
  DashboardOutlined,
  MarkUnreadChatAltOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  PeopleOutlined,
  ContactsOutlined,
  MapOutlined,
  BookOnlineOutlined,
  Settings,
  ContactEmergencyRounded,
  ContactSupport,
  AddBoxOutlined,
  BusinessSharp,
  SurfingSharp,
} from "@mui/icons-material";
import { useState, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import SidebarHeader from "./SidebarHeader";

const LeftSidebar = () => {
  const isNoneMobile = useMediaQuery("(min-width:900px)");
  const theme = useTheme();
  const [selected, setSelected] = useState("Dashboard");
  const { collapsed, toggled, collapseSidebar, toggleSidebar } =
    useProSidebar();

  useEffect(() => {
    !isNoneMobile && toggled
      ? toggleSidebar(false)
      : isNoneMobile && collapsed && collapseSidebar(false);
    // eslint-disable-next-line
  }, [isNoneMobile]);

  const sidebarItems = [
    {
      title: "Dashboard",
      to: "/dashboard",
      icon: (
        <DashboardOutlined
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Users",
      to: "/dashboard/users",
      icon: (
        <PeopleOutlined
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Blogs",
      to: "/dashboard/blogs",
      icon: (
        <BookOnlineOutlined
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Chat",
      to: "/dashboard/chat",
      icon: (
        <MarkUnreadChatAltOutlined
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Packages",
      to: "/dashboard/packages",
      icon: (
        <AddBoxOutlined
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
        />
      ),
      selected,
      setSelected,
    },
    // {
    //   title: "Services",
    //   to: "/dashboard/services",
    //   icon: (
    //     <ContactsOutlined
    //       sx={{ fontSize: "25px", color: theme.palette.primary.main }}
    //     />
    //   ),
    //   selected,
    //   setSelected,
    // },
    {
      subMenuTitle: "Requests",
      subMenuIcon: (
        <MapOutlined
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
        />
      ),
      subMenuItems: [
        {
          title: "Job Business",
          to: "/dashboard/jobs",
          icon: (
            <SurfingSharp
              sx={{ fontSize: "25px", color: theme.palette.primary.main }}
            />
          ),
          selected,
          setSelected,
        },
        {
          title: "Package Services",
          to: "/dashboard/package-services",
          icon: (
            <BusinessSharp
              sx={{ fontSize: "25px", color: theme.palette.primary.main }}
            />
          ),
          selected,
          setSelected,
        },
      ],
    },
    {
      title: "Contact Us",
      to: "/dashboard/contact-us",
      icon: (
        <ContactEmergencyRounded
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "FAQ",
      to: "/dashboard/faq",
      icon: (
        <ContactSupport
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Settings",
      to: "/dashboard/settings",
      icon: (
        <Settings
          sx={{ fontSize: "25px", color: theme.palette.primary.main }}
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
      to: "/dashboard/bar",
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
      to: "/dashboard/pie",
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
      to: "/dashboard/line",
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
    <Box
      sx={{
        position: "sticky",
        top: "0",
        height: "100%",
        zIndex: "2000",
        backgroundColor: theme.palette.bgColor[1000],
      }}
      className="scrollbar"
    >
      <Sidebar
        style={{
          height: "100vh",
          borderRight: "none",
          borderLeft: "none",
        }}
        breakPoint="md"
        backgroundColor={theme.palette.bgColor[1000]}
        rootStyles={{
          ".ps-submenu-content": {
            backgroundColor: theme.palette.bgColor[1000],
          },
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
              backgroundColor: theme.palette.light[400],
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
          closeOnClick={true}
          style={{
            marginTop: "25px",
            marginBottom: "100px",
          }}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              return {
                color: disabled
                  ? theme.palette.error.main
                  : theme.palette.black.main,
                backgroundColor: active && theme.palette.light[400],

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
