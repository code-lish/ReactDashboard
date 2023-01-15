import { useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Meta from "../../components/common/Meta";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllJobs, useGetJobsQuery } from "../../features/job/jobApiSlice.js";
import JobMenu from './JobMenu'

const Job = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isNoneMobile = useMediaQuery("(min-width:900px)");
    const [showModal, setShowModal] = useState(false);
    const [singleFaqId, setSinglFaqId] = useState(null);

    const { isLoading, isSuccess, isError, error } = useGetJobsQuery();

    const jobs = useSelector(selectAllJobs);
    const [pageSize, setPageSize] = useState(11);

    const columns = useMemo(
        () => [
            {
                field: "fullName",
                valueFormatter: (value) => {
                    return value.fullName;
                },

                headerName: "FullName",
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
                field: "province",
                headerName: "Province",
                valueFormatter: (value) => {
                    return value?.province;
                },
                flex: 1,
                type: "string",
            },
            {
                field: "attachments",
                headerName: "Attachments",
                valueFormatter: (value) => {
                    return value?.attachments;
                },
                flex: 1,
                type: "string",
            },
            {
                field: "position",
                headerName: "Position",
                valueFormatter: ({ value }) => {
                    return value?.position
                },
                flex: 1,
                type: "string",
            },
            {
                field: "company",
                headerName: "Company",
                valueFormatter: ({ value }) => {
                    return value?.company
                },
                flex: 1,
                type: "string",
            },
            {
                field: "duration",
                headerName: "Duration",
                valueFormatter: ({ value }) => {
                    return value?.duration
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
                flex: 1,
                renderCell: (params) => {
                    return <JobMenu id={params.id} />;
                },
            }
        ],
        [theme]
    );

    return (
        <>
            <Meta title="Jobs | Rahanet Dashboard" />

            <Box m="15px">
                <Header
                    title="Applied Jobs List"
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
                        rows={jobs}
                        columns={columns}
                    />
                </Box>
            </Box>
        </>
    );
};

export default Job;
