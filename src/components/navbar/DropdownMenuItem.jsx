import React from "react";

import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const DropdownMenuItem = ({ icon, text, onClick }) => {
  return (
    <MenuItem onClick={onClick} style={{ display: "inline-flex" }}>
      <ListItemIcon style={{ minWidth: "2rem" }}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </MenuItem>
  );
};

export default DropdownMenuItem;
