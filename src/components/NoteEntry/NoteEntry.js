import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import "./noteEntry.css";

const NoteEntry = (props) => {
  return (
    <Grid item xs={12} lg={12} className="NoteEntry">
      <Typography variant="body2" gutterBottom className="contentPadding">
        {props.content}
      </Typography>
      <Divider />
    </Grid>
  );
};
export default NoteEntry;
