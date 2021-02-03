//TODO: change entries into theri own child compoenents
//TODO: figure out how to update the UI after child state is changed
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import "./entry.css";

const Entry = (props) => {
  const handleCheckboxChange = (dayIndex, entryIndex) => {
    props.handleCheckboxChange(dayIndex, entryIndex);
  };

  const returnEntry = (type, content, complete, entryIndex) => {
    if (type === "Task") {
      return (
        <Grid item xs={12} lg={12}>
          <Typography variant="body2" gutterBottom>
            <Checkbox
              checked={complete}
              name="taskCompleteBox"
              onChange={() => handleCheckboxChange(props.dayIndex, entryIndex)}
            />
            {content}
          </Typography>
        </Grid>
      );
    }
    if (type === "Note") {
      return (
        <Grid item xs={12} lg={12}>
          <Typography variant="body2" gutterBottom>
            {content}
          </Typography>
        </Grid>
      );
    }
  };
  return (
    <div className="Entry fullWidth">
      {props.entries.length > 0 ? (
        props.entries.map((entry, index) =>
          returnEntry(entry.type, entry.content, entry.complete, index)
        )
      ) : (
        <Grid item xs={12} lg={12}>
          <Typography variant="body2" gutterBottom>
            No Entries.
          </Typography>
        </Grid>
      )}
    </div>
  );
};
export default Entry;
