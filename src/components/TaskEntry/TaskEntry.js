import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import "./taskEntry.css";

const TaskEntry = (props) => {
  const handleCheckboxChange = (dayIndex, entryIndex) => {
    props.handleCheckboxChange(dayIndex, entryIndex);
  };
  return (
    <Grid item xs={12} lg={12} className="TaskEntry">
      <Typography variant="body2" gutterBottom>
        <Checkbox
          className="noLeftPadding taskCheckBox"
          checked={props.complete}
          name="taskCompleteBox"
          onChange={() =>
            handleCheckboxChange(props.dayIndex, props.entryIndex)
          }
        />
        {props.content}
      </Typography>
      <Divider />
    </Grid>
  );
};
export default TaskEntry;
