import { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import {
  MoreVert,
  LanguageOutlined,
  ModeEditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import FlexBetween from "../../components/FlexBetween";
import { Typography } from "@mui/material";
const options = [
  {
    title: "Language",
    icon: <LanguageOutlined />,
  },
  {
    title: "Edit",
    icon: <ModeEditOutlined />,
  },
  {
    title: "Delete",
    icon: <DeleteOutlined />,
  },
];

const ITEM_HEIGHT = 48;

const FaqMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert />
      </IconButton>
      <Menu
        id="long-menu"
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
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            <FlexBetween>
              <Typography>{option.icon}</Typography>
              <Typography sx={{ ml: "5px" }}>{option.title}</Typography>
            </FlexBetween>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FaqMenu;
