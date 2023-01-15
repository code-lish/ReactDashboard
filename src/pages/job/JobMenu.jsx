import { useState } from "react";
import { IconButton, Menu, MenuItem, Box, useTheme } from "@mui/material";
import {
  MoreVert,
  PinDrop,
  CheckBoxOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { Typography } from "@mui/material";
import { useChangeJobStatusMutation } from "../../features/job/jobApiSlice";

const ITEM_HEIGHT = 48;

const JobMenu = ({ id }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [changeStatus, { isLoading, isSuccess, isError, error }] =
    useChangeJobStatusMutation();

  const changeContactStatus = async (e) => {
    const status = e.currentTarget.getAttribute('data-status')
    await changeStatus({ id, status })
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "faq-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="faq-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: theme.palette.bgColor.main,
          },
        }}
      >
        <MenuItem data-status="pending" onClick={changeContactStatus}>
          <FlexBetween>
            <PinDrop />
            <Typography sx={{ ml: "5px" }}>Pending</Typography>
          </FlexBetween>
        </MenuItem>

        <MenuItem data-status="approved" onClick={changeContactStatus}>
          <FlexBetween>
            <CheckBoxOutlined />
            <Typography sx={{ ml: "5px" }}>Approved</Typography>
          </FlexBetween>
        </MenuItem>

        <MenuItem data-status="declined" onClick={changeContactStatus}>
          <FlexBetween>
            <CloseOutlined />
            <Typography sx={{ ml: "5px" }}>Declined</Typography>
          </FlexBetween>
        </MenuItem>

      </Menu>
    </Box>
  );
};

export default JobMenu;
