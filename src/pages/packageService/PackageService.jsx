import { useState, useMemo } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Meta from "../../components/common/Meta";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllBusinessPackages, useGetBusinessPackagesQuery } from "../../features/businessPackage/businessPackageApiSlice";
import PackageMenu from './PackageMenu'

const PackageService = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const isNoneMobile = useMediaQuery("(min-width:900px)");
    const [showModal, setShowModal] = useState(false);
    const [singleFaqId, setSinglFaqId] = useState(null);

    const { isLoading, isSuccess, isError, error } = useGetBusinessPackagesQuery();

    const packages = useSelector(selectAllBusinessPackages);
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
                field: "address",
                headerName: "Address",
                valueFormatter: (value) => {
                    return value?.address;
                },
                flex: 1,
                type: "string",
            },
            {
                field: "bandwidth",
                headerName: "Bandwidth",
                valueFormatter: (value) => {
                    return value?.bandwidth;
                },
                flex: 1,
                type: "string",
            },
            {
                field: "service",
                headerName: "Service",
                valueFormatter: ({ value }) => {
                    return value?.name?.en
                },
                flex: 1,
                type: "string",
            },
            {
                field: "gps",
                headerName: "GPS",
                renderCell: (params) => {
                    return <a target="_blank" rel="noreferrer" style={{ color: "white" }}
                        href={`https://www.google.com/maps/dir/Current+Location/${params?.row?.gps?.longitude},${params?.row?.gps?.latitude}`}>
                        Open
                    </a>
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
                flex: 1,
                renderCell: (params) => {
                    return <PackageMenu id={params.id} />;
                },
            }
        ],
        [theme]
    );

    return (
        <>
            <Meta title="Business Packages | Rahanet Dashboard" />

            <Box m="15px">
                <Header
                    title="Business Packages Lists"
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
                        rows={packages}
                        columns={columns}
                    />
                </Box>
            </Box>
        </>
    );
};

export default PackageService;
