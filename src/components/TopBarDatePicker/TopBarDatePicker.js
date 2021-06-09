import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import DateRangeRoundedIcon from "@material-ui/icons/DateRangeRounded";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
  },
});

const TopBarDatePicker = () => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, handleDateChange] = useState("");

  return (
    <div className={classes.container}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="calender"
        onClick={() => setIsOpen(true)}>
        <DateRangeRoundedIcon />
      </IconButton>

      <DatePicker
        variant="dialog"
        open={isOpen}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        disableToolbar={true}
        format="d MMM yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        TextFieldComponent={() => null}
      />
    </div>
  );
};

export default TopBarDatePicker;
