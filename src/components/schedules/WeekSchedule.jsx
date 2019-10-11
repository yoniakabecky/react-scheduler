import React from 'react';
import {
  Paper, Table, TableHead, TableRow, TableCell,
  TableBody, Chip, Avatar, Container,
  // Fab, Tooltip
} from '@material-ui/core';
import { Edit, /*Add*/ } from '@material-ui/icons';

import { Link } from 'react-router-dom';
import ChangeSchedule from '../dialogs/ChangeSchedule';

import { week1 } from '../../store/initialData';

const styles = {
  wrapper: {
    overflowX: "scroll",
  },
  fab: {
    margin: "2rem",
  },
  // absolute: {
  //   position: 'absolute',
  //   bottom: "2rem",
  //   right: "3rem",
  // },
}

const WeekSchedule = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [editData, setEditData] = React.useState(null);

  const handleClick = (day) => {
    setOpenDialog(true);
    setEditData(day);
  }

  const closeDialog = () => {
    setOpenDialog(false);
  }

  return (
    <Container maxWidth="xl" style={{ position: "relative" }}>
      <h2>Week Schedule</h2>
      <Paper>
        <div style={styles.wrapper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center"><Link to="/day" >Mon.</Link></TableCell>
                <TableCell align="center">Tue.</TableCell>
                <TableCell align="center">Wed.</TableCell>
                <TableCell align="center">Thus.</TableCell>
                <TableCell align="center">Fri.</TableCell>
                <TableCell align="center">Sat.</TableCell>
                <TableCell align="center">Sun.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {week1.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Chip
                      avatar={<Avatar>E</Avatar>}
                      label={employee.name}
                      // clickable
                      onDelete={() => console.log('edit!!')}
                      deleteIcon={<Edit />}
                    />
                  </TableCell>
                  {employee.schedules.map((day, index) => (
                    day.isAvailable
                      ? <TableCell align="center" key={index} onClick={() => handleClick(day)}>
                        {day.shift[1][0] !== undefined ? `${day.shift[1][0]}-${day.shift[1][1]}` : ""}
                      </TableCell>
                      : <TableCell align="center" key={index} style={{ background: 'gray' }}>OFF</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
      {openDialog ? <ChangeSchedule close={closeDialog} data={editData} /> : null}
      {/* <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={styles.absolute}>
          <Add />
        </Fab>
      </Tooltip> */}
    </Container>
  );
}

export default WeekSchedule;
