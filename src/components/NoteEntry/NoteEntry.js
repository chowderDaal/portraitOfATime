import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import "./noteEntry.css";

const NoteEntry = (props) => {
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
    <div className="NoteEntry">
      <Grid container spacing={0} >
        <Grid item xs={11} lg={11} >
          <Typography variant="body2" gutterBottom className="contentPadding">
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
    </div>
  );
};
export default NoteEntry;
