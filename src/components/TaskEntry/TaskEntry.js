import { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import "./taskEntry.css";

const TaskEntry = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCheckboxChange = (dayIndex, entryIndex) => {
    props.handleCheckboxChange(dayIndex, entryIndex);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const openMenu = (event) => {
    setMenuOpen(event.currentTarget);
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
        <MoreVertRoundedIcon
          className="menuIcon"
          aria-controls="entry-menu"
          onClick={openMenu}
        />
        <Menu
          id="entry-menu"
          anchorEl={menuOpen}
          keepMounted
          open={Boolean(menuOpen)}
          onClose={closeMenu}>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Edit</MenuItem>
        </Menu>
      </Typography>

      <Divider />
    </Grid>
  );
};
export default TaskEntry;
