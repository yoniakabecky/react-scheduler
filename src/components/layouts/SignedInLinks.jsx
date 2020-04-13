import React from "react";
import { withRouter } from "react-router-dom";

// Mui
import Button from "@material-ui/core/Button";
import AvatarIcon from "@material-ui/icons/AccountCircle";

// Auth
import { auth } from "../../firebase/firebase";

// Components
import DropdownMenu from "./DropdownMenu";

const SignedInLinks = ({ history }) => {
  const [open, setOpen] = React.useState(null);

  const handleSignOut = async (event) => {
    await auth
      .signOut()
      .then(() => history.push("/"))
      .catch((error) => alert(error));
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

export default withRouter(SignedInLinks);
