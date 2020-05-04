import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  // DialogContentText, TextField,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  // KeyboardDatePicker,
} from "@material-ui/pickers";
// import MomentUtils from '@date-io/moment';
// import moment from 'moment';

const AddShift = ({ close, data }) => {
  const { shift } = data;
  console.log(shift);
  const [selectedTime, setSelectedTime] = React.useState({
    // startTime: moment(),
    // endTime: moment(),
  });

  const handleTimeChange = (event, date) => {
    console.log(event, date);
    setSelectedTime({
      ...selectedTime,
      [event.name]: date,
    });
  };

  return (
    <div>
      <Dialog
        open={true}
        onClose={close}
        aria-labelledby="form-dialog-title"
        maxWidth="lg"
      >
        <DialogTitle id="form-dialog-title">Change Shift</DialogTitle>
        {/* <MuiPickersUtilsProvider utils={MomentUtils}> */}
        <DialogContent>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            name="startTime"
            label="Start Time"
            value={selectedTime.startTime}
            onChange={handleTimeChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </DialogContent>
        <DialogContent>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            name="endTime"
            label="End Time"
            value={selectedTime.endTime}
            onChange={handleTimeChange}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </DialogContent>
        {/* </MuiPickersUtilsProvider> */}
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={close} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddShift;
