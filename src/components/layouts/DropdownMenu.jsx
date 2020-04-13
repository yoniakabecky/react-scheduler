import React from "react";

// Mui
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitIcon from "@material-ui/icons/ExitToApp";
import SettingIcon from "@material-ui/icons/Settings";

const DropdownMenu = ({ open, handleClose, handleSignOut }) => {
  return (
    <Menu
      id="simple-menu"
      anchorEl={open}
      keepMounted
      open={Boolean(open)}
      onClose={handleClose}
      style={{ top: "3rem" }}
    >
      <MenuItem onClick={() => console.log("Clicked")} disabled>
        <SettingIcon />
        Setting
      </MenuItem>
      <MenuItem onClick={handleSignOut}>
        <ExitIcon />
        Sign Out
      </MenuItem>
    </Menu>
  );
};

export default DropdownMenu;
