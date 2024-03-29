import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import EntryField from "../EntryField/EntryField";
import Entries from "../Entries/Entries";
import Grid from "@material-ui/core/Grid";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "./dayCard.css";

const DayCard = (props) => {
  const [displayDate, setDisplayDate] = useState(props.date);
  const [gradientStyle, setGradientStyle] = useState({
    backgroundImage:
      "linear-gradient(45deg," +
      props.primaryColor +
      "," +
      props.secondaryColor +
      ")",
  });

  const convertDateFormat = (argDate) => {
    let allMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = allMonths[argDate.getMonth()];
    let dayNumber = argDate.getDate();
    let year = argDate.getFullYear();
    return month + " " + dayNumber + ", " + year;
  };

  const generateDateId = (argDate) => {
    let month = argDate.getMonth() + 1;
    let dayNumber = argDate.getDate();
    let year = argDate.getFullYear();
    return month + "-" + dayNumber + "-" + year + "dayCard";
  };

  return (
    <DragDropContext>
      <Droppable droppableId="list">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="DayCard">
              <Paper
                elevation={6}
                className="dayCardHeight centerHorizontally dayCardPadding overFlowYAuto"
                style={gradientStyle}
              >
                <Grid item xs={12} lg={12}>
                  <Grid item xs={12} lg={12} className="centerHorizontally">
                    <Typography variant="h5">
                      {convertDateFormat(displayDate)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <EntryField date={displayDate} />
                  </Grid>
                  <Grid item xs={12} lg={12}>
                    <Entries
                      entries={props.entries}
                      handleCheckboxChange={props.handleCheckboxChange}
                      dayIndex={props.dayIndex}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </div>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DayCard;
