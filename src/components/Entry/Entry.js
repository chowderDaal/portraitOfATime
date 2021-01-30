import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./entry.css";

const Entry = (props) => {
  console.log(props);

  const returnEntry = (type, content) => {
    if (type === "Task") {
      return (
        <Grid item xs={12} lg={12}>
          <Typography variant="body2" gutterBottom>
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
        props.entries.map((entry) => returnEntry(entry.type, entry.content))
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
