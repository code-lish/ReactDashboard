import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";
import { Box, useTheme, useMediaQuery, Typography } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import FaqMenu from "./FaqMenu";

const FAQ = () => {
  const theme = useTheme();
  const isNoneMobile = useMediaQuery("(min-width:900px)");

  const [pageSize, setPageSize] = useState(5);

  const desktopColumns = [
    { field: "question", headerName: "Question", flex: 1 },
    {
      field: "answer",
      headerName: "Answer",
      flex: 1,
    },
    {
      field: "classification",
      headerName: "Classification",
      flex: 0.5,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.3,
      renderCell: () => {
        return <FaqMenu />;
      },
    },
  ];
  // const mobileColumns = [
  //   { field: "id", flex: 0.5, headerName: "ID" },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "phone",
  //     headerName: "Phone Number",
  //     flex: 1,
  //   },
  //   {
  //     field: "accessLevel",
  //     headerName: "Access Level",
  //     flex: 1.5,
  //     renderCell: ({ row: { access } }) => {
  //       return (
  //         <Box
  //           width="90%"
  //           // m="0 auto"
  //           py="5px"
  //           px="10px"
  //           display="flex"
  //           justifyContent="space-between"
  //           backgroundColor={
  //             access === "admin"
  //               ? theme.palette.greenAccent.main
  //               : access === "manager"
  //               ? theme.palette.greenAccent[1000]
  //               : theme.palette.greenAccent[1100]
  //           }
  //           borderRadius="4px"
  //         >
  //           {access === "admin" && <AdminPanelSettingsOutlined />}
  //           {access === "manager" && <SecurityOutlined />}
  //           {access === "user" && <LockOpenOutlined />}
  //           <Typography
  //             sx={{ ml: "5px" }}
  //             color={theme.palette.greenAccent[100]}
  //           >
  //             {access}
  //           </Typography>
  //         </Box>
  //       );
  //     },
  //   },
  // ];

  const data = [
    {
      id: 1,
      question:
        "thissfkladjlkjdslakfjdlakjfldksajflkdsjaflkdsjaf;lkmnaoiewrhjajfdslkaj;dflksjd",
      answer:
        "thissfkladjlkjdslakfjdlakjfldksajflkdsjaflkdsjaf;lkmnaoiewrhjajfdslkaj;dflksjd",
      classification: "jonsnow@gmail.com",
      actions: null,
    },
    {
      id: 2,
      question: 2,
      answer: "Jon Snow",
      classification: "jonsnow@gmail.com",
      actions: null,
    },
    {
      id: 3,
      question: 3,
      answer: "Jon Snow",
      classification: "jonsnow@gmail.com",
      actions: null,
    },
    {
      id: 4,
      question: 4,
      answer: "Jon Snow",
      classification: "jonsnow@gmail.com",
      actions: null,
    },
  ];

  return (
    <Box m="15px">
      <Header title="Frequently Asked Questions" subtitle="Ask you question" />
      <Box
        className="scrollbar"
        m="10px 0 0 0"
        height="73vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },

          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.light[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.bgColor[1000],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: theme.palette.light[400],
          },
          "& .MuiCheckbox-root": {
            color: `${theme.palette.grey[800]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.grey[900]} !important`,
          },
        }}
      >
        <DataGrid
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          rows={data}
          columns={desktopColumns}
        />
      </Box>
    </Box>
  );
};

export default FAQ;
