import React, { useState, Fragment } from "react";
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
    <Fragment>
      <Grid container spacing={0} className="TaskEntry">
        <Grid item xs={1} lg={1} >
          <Checkbox
            className="noLeftPadding taskCheckBox"
            checked={props.complete}
            name="taskCompleteBox"
            onChange={() =>
              handleCheckboxChange(props.dayIndex, props.entryIndex)
            }
          />
        </Grid>

        <Grid item xs={10} lg={10} >
          <Typography variant="body2" gutterBottom>
            {props.content}
          </Typography>
        </Grid>
        <Grid item xs={1} lg={1} >
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
        </Grid>
      </Grid>

      <Divider variant="middle" />
    </Fragment>
  );
};
export default TaskEntry;
