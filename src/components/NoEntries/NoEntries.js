import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./noEntries.css";

const NoEntries = (props) => {
  return (
    <Grid item xs={12} lg={12} className="NoEntries">
      <Typography variant="body2" gutterBottom>
        No Entries
      </Typography>
    </Grid>
  );
};
export default NoEntries;
