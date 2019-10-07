import React from 'react';
import { Link } from 'react-router-dom';
import {
  Paper, Table, TableHead, TableRow, TableCell,
  TableBody, Chip, Avatar,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const DaySchedule = () => {
  return (
    <>
      <Link to="/week">> Week</Link>
      <Paper>
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
              <TableCell align="center" style={{ background: "aqua" }} colSpan={3}>18-25</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default DaySchedule;
