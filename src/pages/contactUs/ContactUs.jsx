import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import ContactUsMenu from "./ContactUsMenu";

const ContactUs = () => {
  const theme = useTheme();
  const isNoneMobile = useMediaQuery("(min-width:900px)");

  const [pageSize, setPageSize] = useState(5);

  const desktopColumns = [
    { field: "id", headerName: "id" },
    {
      field: "name",
      headerName: "Name",
      flex: 0.6,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Num",
      flex: 0.7,
    },
    {
      field: "subject",
      headerName: "Subject",
      flex: 0.7,
    },
    {
      field: "message",
      headerName: "Message",
      flex: 2,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 0.3,
      renderCell: () => {
        return <ContactUsMenu />;
      },
    },
  ];
  const data = [
    {
      id: 1,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?",
      status: null,
    },
    {
      id: 2,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque",
      status: null,
    },
    {
      id: 3,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor?",
      status: null,
    },
    {
      id: 4,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message: "Lorem ipsum dolor",
      status: null,
    },
    {
      id: 5,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?",
      status: null,
    },
    {
      id: 6,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message: "Lorem ipsum dolor sit amet consectetur adipisi",
      status: null,
    },
    {
      id: 7,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message: "vident numquam error eveniet vero?",
      status: null,
    },
    {
      id: 8,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message: "Lorem ipsum",
      status: null,
    },
    {
      id: 9,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?",
      status: null,
    },
    {
      id: 10,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?",
      status: null,
    },
    {
      id: 11,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message: "Lorem ipsum dolor sit amet conse",
      status: null,
    },
    {
      id: 12,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?",
      status: null,
    },
    {
      id: 13,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message: "Lorem ipsum dolor sit amet consectetur adi",
      status: null,
    },
    {
      id: 14,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?",
      status: null,
    },
    {
      id: 15,
      name: "Noormohammad",
      email: "n.rahemi1377@gmail.com",
      phone: "0093792918156",
      subject: "Technical problem",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dicta dolor quia mollitia magnam non magni doloremque omnis quibusdam incidunt hic asperiores, est itaque repudiandae provident numquam error eveniet vero?",
      status: null,
    },
  ];
  return (
    <Box m="15px">
      <Header title="Contact Us" subtitle="Contact with out team" />
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
          getRowHeight={() => "auto"}
          pagination
          rows={data}
          columns={desktopColumns}
        />
      </Box>
    </Box>
  );
};

export default ContactUs;
