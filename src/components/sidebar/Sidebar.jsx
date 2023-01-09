import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import { useTheme, Box, useMediaQuery } from "@mui/material";
import {
  DashboardOutlined,
  MarkUnreadChatAltOutlined,
  RestaurantMenuOutlined,
  PeopleAltOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  PeopleOutlined,
  ContactsOutlined,
  ReceiptOutlined,
  MapOutlined,
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
      title: "Data",
    },
    {
      title: "Manage Team",
      to: "/manageteam",
      icon: (
        <PeopleOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Contacts Information",
      to: "/contacts",
      icon: (
        <ContactsOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      selected,
      setSelected,
    },
    {
      title: "Invoices Balances",
      to: "/invoices",
      icon: (
        <ReceiptOutlined
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
    {
      subMenuTitle: "Maps",
      subMenuIcon: (
        <MapOutlined
          sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
        />
      ),
      subMenuItems: [
        {
          title: "Manage Team",
          to: "/manageteam",
          icon: (
            <PeopleOutlined
              sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
            />
          ),
          selected,
          setSelected,
        },
        {
          title: "Contacts Information",
          to: "/contacts",
          icon: (
            <ContactsOutlined
              sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
            />
          ),
          selected,
          setSelected,
        },
        {
          title: "Invoices Balances",
          to: "/invoices",
          icon: (
            <ReceiptOutlined
              sx={{ fontSize: "25px", color: theme.palette.black[1000] }}
            />
          ),
          selected,
          setSelected,
        },
      ],
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
