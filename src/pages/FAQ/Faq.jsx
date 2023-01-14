import { useState, useMemo } from "react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { Box, useTheme, useMediaQuery, Tooltip } from "@mui/material";
import Meta from "../../components/common/Meta";
import { useGetFaqsQuery } from "../../features/faq/faqApiSlice";
import { selectAllFaqs } from "../../features/faq/faqApiSlice";
import { useSelector } from "react-redux";
import {
  LanguageOutlined,
  ModeEditOutlined,
  DeleteOutlined,
  ReadMoreOutlined,
} from "@mui/icons-material";
import EditFaq from "./EditFaq";
import { useNavigate } from "react-router-dom";
const FAQ = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isNoneMobile = useMediaQuery("(min-width:900px)");
  const [showModal, setShowModal] = useState(false);
  const [singleFaqId, setSinglFaqId] = useState(null);

  const { isLoading, isSuccess, isError, error } = useGetFaqsQuery();

  const faqs = useSelector(selectAllFaqs);
  const [pageSize, setPageSize] = useState(5);

  const columns = useMemo(
    () => [
      {
        field: "question",
        valueFormatter: ({ value }) => {
          return value?.en || value?.fa || value?.ps;
        },

        headerName: "Question",
        flex: 1,
        type: "string",
      },
      {
        field: "answer",
        headerName: "Answer",
        valueFormatter: ({ value }) => {
          return value?.en || value?.fa || value?.ps;
        },
        flex: 1,
        type: "string",
      },
      {
        field: "category",
        headerName: "Category",
        flex: 0.5,
      },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        flex: 0.5,
        getActions: (params) => [
          <GridActionsCellItem
            icon={
              <Tooltip
                title="Change language"
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: theme.palette.grey[800],
                      color: theme.palette.grey[200],
                    },
                  },
                }}
              >
                <LanguageOutlined />
              </Tooltip>
            }
            label="Language"
            onClick={() => console.log("Language clicked")}
          />,
          <GridActionsCellItem
            icon={
              <Tooltip
                title="Delete"
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: theme.palette.grey[800],
                      color: theme.palette.grey[200],
                    },
                  },
                }}
              >
                <DeleteOutlined
                  sx={{
                    color: theme.palette.error.main,
                  }}
                />
              </Tooltip>
            }
            label="Delete"
            onClick={() => console.log("delete clicked")}
          />,
          <GridActionsCellItem
            icon={
              <Tooltip
                title="Edit"
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: theme.palette.grey[800],
                      color: theme.palette.grey[200],
                    },
                  },
                }}
              >
                <ModeEditOutlined />
              </Tooltip>
            }
            label="Edit"
            onClick={() => handleEditFaq(params.id)}
          />,
          <GridActionsCellItem
            icon={
              <Tooltip
                title="Read More"
                PopperProps={{
                  sx: {
                    "& .MuiTooltip-tooltip": {
                      backgroundColor: theme.palette.grey[800],
                      color: theme.palette.grey[200],
                    },
                  },
                }}
              >
                <ReadMoreOutlined />
              </Tooltip>
            }
            label="Read More"
            onClick={() => navigate(`/dashboard/faq/${params.id}`)}
          />,
        ],
      },
    ],
    [theme]
  );

  const handleEditFaq = (id) => {
    setShowModal(true);
    setSinglFaqId(id);
  };

  return (
    <>
      <EditFaq
        showModal={showModal}
        setShowModal={setShowModal}
        id={singleFaqId}
      />
      <Meta title="FAQ | Rahanet Dashboard" />

      <Box m="15px">
        <Header
          title="Frequently Asked Questions"
          subtitle="Ask you question"
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
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            rows={faqs}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  );
};

export default FAQ;
