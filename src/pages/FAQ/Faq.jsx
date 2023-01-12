import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import FaqMenu from "./FaqMenu";
import Meta from "../../components/common/Meta";

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
    <>
      <Meta title="FAQ | Rahanet Dashboard" />

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
    </>
  );
};

export default FAQ;
