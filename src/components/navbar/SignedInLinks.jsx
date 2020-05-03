import React from "react";

// Mui
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";

// Components
import DropdownMenu from "./DropdownMenu";

const SignedInLinks = ({ user }) => {
  const { imageUrl, userName } = user;
  const [open, setOpen] = React.useState(null);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  return (
    <>
      <Button color="inherit" onClick={handleClick}>
        <Avatar
          alt={userName}
          src={imageUrl}
          style={{ height: "2rem", width: "2rem" }}
        />
      </Button>
      <DropdownMenu open={open} user={user} handleClose={() => setOpen(null)} />
    </>
  );
};

export default SignedInLinks;
