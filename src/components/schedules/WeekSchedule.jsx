import React from 'react';
import {
  Paper, Table, TableHead, TableRow, TableCell,
  TableBody, Chip, Avatar,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const WeekSchedule = () => {
  return (
    <Paper>
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
          <TableRow>
            <TableCell>
              <Chip
                avatar={<Avatar>E</Avatar>}
                label="Employee 1"
                // clickable
                onDelete={() => console.log('edit!!')}
                deleteIcon={<EditIcon />}
              />
            </TableCell>
            <TableCell align="center" style={{ background: 'gray' }}>Off</TableCell>
            <TableCell align="center">9-15</TableCell>
            <TableCell align="center">15-21</TableCell>
            <TableCell align="center" style={{ background: 'gray' }}>Off</TableCell>
            <TableCell align="center" style={{ background: 'gray' }}>Off</TableCell>
            <TableCell align="center">18-25</TableCell>
            <TableCell align="center">18-25</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

export default WeekSchedule;
