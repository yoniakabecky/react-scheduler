import React from "react";

// Redux
import { connect } from "react-redux";
import { signOutUser } from "../../actions/employeeActions";

// Mui
import Button from "@material-ui/core/Button";
import AvatarIcon from "@material-ui/icons/AccountCircle";

// Components
import DropdownMenu from "./DropdownMenu";

const SignedInLinks = ({ signOutUser }) => {
  const [open, setOpen] = React.useState(null);

  const handleSignOut = () => {
    signOutUser();
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        <AvatarIcon />
      </Button>
      <DropdownMenu
        open={open}
        handleClose={handleClose}
        handleSignOut={handleSignOut}
      />
    </>
  );
};

export default connect(null, { signOutUser })(SignedInLinks);
