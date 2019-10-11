import React from 'react';
import { Drawer, List, ListItem, Divider, ListItemIcon, ListItemText } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import './scss/layouts.scss';

const MenuDrawer = (props) => {

  // const toggleDrawer = (side, open) => event => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  // };

  return (
    <Drawer open={props.isOpen} onClose={() => props.handleClose()}>
      <div
        style={{ width: 250 }}
        role="presentation"
      >
        <List>
          <ListItem>Test</ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItem>
        </List>
      </div>
    </Drawer>
  );
}

export default MenuDrawer;
