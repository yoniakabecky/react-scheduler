import React from "react";
import { useHistory } from "react-router-dom";
import { USER_SETTING } from "../../constants/pathNames";

// Redux
import { connect } from "react-redux";
import { signOutUser } from "../../redux/actions/employeeActions";

// Mui
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

// icons
import ExitIcon from "@material-ui/icons/ExitToApp";
import SettingIcon from "@material-ui/icons/Settings";

// components
import DropdownMenuItem from "./DropdownMenuItem";

const StyledMenu = withStyles({
  paper: {
    padding: "1rem 1rem 0 1rem",
    textAlign: "center",
    maxWidth: "18rem",
  },
})((props) => (
  <Menu
    elevation={2}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const DropdownMenu = ({ open, handleClose, user, signOutUser, classes }) => {
  const { imageUrl, userName, email } = user;
  const history = useHistory();

  const jumpToLink = () => {
    history.push(USER_SETTING);
  };

  return (
    <StyledMenu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
      <Avatar alt={userName} src={imageUrl} className={classes.avatar} />
      <Typography variant="h6" component="p" className={classes.userName}>
        {userName}
      </Typography>
      <Typography variant="caption" className={classes.email}>
        {email}
      </Typography>
      <Divider className={classes.divider} />
      <DropdownMenuItem
        icon={<SettingIcon />}
        text="Settings"
        onClick={jumpToLink}
      />
      <DropdownMenuItem
        icon={<ExitIcon />}
        text="Sign Out"
        onClick={signOutUser}
      />
    </StyledMenu>
  );
};

const styles = {
  avatar: {
    margin: "0 auto 0.5rem auto",
  },
  userName: {
    margin: "0 auto -0.3rem auto",
  },
  email: {
    opacity: 0.8,
  },
  divider: {
    marginTop: "1rem",
    marginBottom: "0.5rem",
  },
};

export default connect(null, { signOutUser })(withStyles(styles)(DropdownMenu));
