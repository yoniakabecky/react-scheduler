import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle, KeyboardArrowDown, ExitToApp, Settings } from '@material-ui/icons';
import { auth } from '../../firebase/firebase';
import { AuthContext } from '../../context/Auth'

const SignedInLinks = ({ history }) => {
  const { currentUser } = useContext(AuthContext);

  const handleSignOut = async event => {
    await auth.signOut()
      .then(() => history.push("/"))
      .catch(error => alert(error))
  };

  const [open, setOpen] = React.useState(null);

  const handleClick = event => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClick}>
        <AccountCircle style={{ marginRight: "0.5rem" }} />
        {currentUser.displayName}
        <KeyboardArrowDown style={{ marginLeft: "0.1rem" }} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        style={{ top: "3rem" }}
      >
        <MenuItem onClick={handleSignOut} disabled>
          <Settings />
          Setting
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <ExitToApp />
          Sign Out
        </MenuItem>
      </Menu>
    </div>
  );
}

export default withRouter(SignedInLinks);
