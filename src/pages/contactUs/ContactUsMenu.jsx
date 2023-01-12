import { useState } from "react";
import { IconButton, Menu, MenuItem, Box, useTheme } from "@mui/material";
import {
  MoreVert,
  LanguageOutlined,
  ModeEditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { Typography } from "@mui/material";

const ITEM_HEIGHT = 48;

const ContactUsMenu = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
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
        <MenuItem onClick={handleClose}>
          <FlexBetween>
            <LanguageOutlined />
            <Typography sx={{ ml: "5px" }}>Language</Typography>
          </FlexBetween>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <FlexBetween>
            <ModeEditOutlined />
            <Typography sx={{ ml: "5px" }}>Edit</Typography>
          </FlexBetween>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <FlexBetween>
            <DeleteOutlined />
            <Typography sx={{ ml: "5px" }}>Delete</Typography>
          </FlexBetween>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ContactUsMenu;
