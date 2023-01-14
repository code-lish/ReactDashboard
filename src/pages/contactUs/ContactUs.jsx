import { useState, useMemo } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { Box, useTheme, useMediaQuery, Tooltip, Button } from "@mui/material";
import Meta from "../../components/common/Meta";
import { useGetFaqsQuery } from "../../features/faq/faqApiSlice";
import { selectAllFaqs } from "../../features/faq/faqApiSlice";
import { useSelector } from "react-redux";
import {
  LanguageOutlined,
  ModeEditOutlined,
  DeleteOutlined,
  ReadMoreOutlined,
  BookOnlineOutlined
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { selectAllContacts, useGetContactsQuery } from "../../features/contact/contactApiSlice";
import ContactUsMenu from './ContactUsMenu'

const ContactUs = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNoneMobile = useMediaQuery("(min-width:900px)");
  const [showModal, setShowModal] = useState(false);
  const [singleFaqId, setSinglFaqId] = useState(null);

  const { isLoading, isSuccess, isError, error } = useGetContactsQuery();

  const contacts = useSelector(selectAllContacts);
  const [pageSize, setPageSize] = useState(11);

  const columns = useMemo(
    () => [
      {
        field: "name",
        valueFormatter: (value) => {
          return value.name;
        },

        headerName: "Name",
        flex: 1,
        type: "string",
      },
      {
        field: "email",
        headerName: "Email",
        valueFormatter: (value) => {
          return value?.email;
        },
        flex: 1,
        type: "string",
      },
      {
        field: "phoneNumber",
        headerName: "PhoneNumber",
        valueFormatter: (value) => {
          return value?.phoneNumber;
        },
        flex: 1,
        type: "string",
      },
      {
        field: "subject",
        headerName: "Subject",
        valueFormatter: (value) => {
          return value?.subject;
        },
        flex: 1,
        type: "string",
      },
      {
        field: "message",
        headerName: "Message",
        valueFormatter: (value) => {
          return value?.message;
        },
        flex: 1,
        type: "string",
      },
      {
        field: "status",
        headerName: "Status",
        valueFormatter: (value) => {
          return value?.status;
        },
        flex: 1,
        type: "string",
      },
      {
        field: "Change Status",
        headerName: "Change Status",
        flex: 0.3,
        renderCell: (params) => {
          return <ContactUsMenu id={params.id} />;
        },
      }
    ],
    [theme]
  );

  return (
    <>
      <Meta title="Contact-Us | Rahanet Dashboard" />

      <Box m="15px">
        <Header
          title="Contacts' Lists"
          subtitle="Check them Out!"
        />
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
            rowsPerPageOptions={[11, 21]}
            pagination
            rows={contacts}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  );
};

export default ContactUs;
