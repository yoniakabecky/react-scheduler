import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper, Table, TableHead, TableRow, TableCell,
  TableBody, Chip, Avatar, Container
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ChangeSchedule from '../dialogs/ChangeSchedule';

const styles = {
  wrapper: {
    overflowX: "scroll",
  }
}

const DaySchedule = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const closeDialog = () => {
    setOpenDialog(false);
  }

  return (
    <Container maxWidth="xl">
      <h2>> <Link to="/week">Week</Link> > Day Schedule</h2>
      <Paper>
        <div style={styles.wrapper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">9am</TableCell>
                <TableCell align="center">12pm</TableCell>
                <TableCell align="center">3pm</TableCell>
                <TableCell align="center">6pm</TableCell>
                <TableCell align="center">9pm</TableCell>
                <TableCell align="center">12am</TableCell>
                <TableCell align="center">2am</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Chip
                    avatar={<Avatar>E</Avatar>}
                    label="Employee"
                    // clickable
                    onDelete={() => console.log('edit!!')}
                    deleteIcon={<EditIcon />}
                  />
                </TableCell>
                <TableCell align="center" colSpan={3}></TableCell>
                <TableCell align="center" style={{ background: "aqua" }} colSpan={3} onClick={() => setOpenDialog(true)}>
                  18-25
              </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Paper>
      {openDialog ? <ChangeSchedule close={closeDialog} /> : null}
    </Container>
  );
}

export default DaySchedule;
