import { useState, useMemo, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Meta from "../../components/common/Meta";
import { useGetBlogsQuery } from "../../features/blog/blogApiSlice";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const theme = useTheme();
  const { id } = useParams();

  const { blog } = useGetBlogsQuery("blogList", {
    selectFromResult: ({ data }) => ({
      blog: data?.entities[id],
    }),
  });

  const [blogArray, setBlogArray] = useState([blog]);

  const columns = useMemo(
    () => [
      {
        field: "title",
        headerName: "Title",
        valueFormatter: ({ value }) => {
          return value?.fa;
        },
        flex: 0.5,
        type: "string",
      },
      {
        field: "content",
        headerName: "Content",
        valueFormatter: ({ value }) => {
          return value?.fa;
        },
        flex: 2,
        type: "string",
      },
      {
        field: "slug",
        headerName: "Slug",
        flex: 1,
        type: "string",
      },
      {
        field: "excerpt",
        valueFormatter: ({ value }) => {
          return value?.fa;
        },
        headerName: "Excerpt",
        flex: 1,
        type: "string",
      },
      {
        field: "comments",
        headerName: "Comments",
        valueFormatter: ({ value }) => {
          return value?.length;
        },
        flex: 0.5,
        type: "string",
      },
      {
        field: "author",
        valueFormatter: ({ value }) => {
          return value?.fullName;
        },

        headerName: "Name",
        flex: 0.7,
        type: "string",
      },
      {
        field: "createdAt",
        valueFormatter: ({ value }) => {
          const date = new Date(value);
          return date.toDateString();
        },
        headerName: "Created At",
        flex: 1,
        type: "string",
      },
      {
        field: "status",
        headerName: "Status",
        flex: 0.5,
        type: "string",
      },
      {
        field: "image",
        headerName: "Image",
        flex: 1.2,
        renderCell: ({ value }) => (
          <Box>
            <img src={value} width="100%" height="150px" />
          </Box>
        ),
      },
    ],
    [theme]
  );

  return (
    <>
      <Meta title="SingleBlog | Rahanet Dashboard" />

      <Box m="15px">
        <Header title="Single blog" subtitle="Single Blog" />
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
            getRowHeight={() => "auto"}
            rows={blogArray}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  );
};

export default SingleBlog;
