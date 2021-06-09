import { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import "./entryField.css";

const EntryField = () => {
  const [menu, setMenu] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Task");
  const [menuOptions, setMenuOptions] = useState(["Note", "Task"]);

  const closeMenu = () => {
    setMenu(false);
  };

  const openMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const selectMenuItem = (item) => {
    setSelectedOption(item);
    setMenu(false);
  };

  return (
    <div className="EntryField fullWidth">
      <Grid container spacing={0} >

        <Grid item xs={10} lg={10} >
          {selectedOption === "Task" && (
            <TextField
              id="newTask"
              name="newTask"
              margin="dense"
              fullWidth
              placeholder="New Task"
            />
          )}

          {selectedOption === "Note" && (
            <TextField
              id="newNote"
              name="newNotes"
              margin="dense"
              placeholder="New Note"
              fullWidth
              multiline={true}
            />
          )}
        </Grid>

        <Grid item xs={1} lg={1} >
          <MoreVertRoundedIcon
            className="padding7 growIcon"
            aria-controls="entry-menu"
            onClick={openMenu}
          />
          <Menu
            id="entry-menu"
            anchorEl={menu}
            keepMounted
            open={Boolean(menu)}
            onClose={closeMenu}>
            {menuOptions.map((item) => (
              <MenuItem key={item} onClick={() => selectMenuItem(item)}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        </Grid>

        <Grid item xs={1} lg={1} >
          <AddRoundedIcon className="padding7 growIcon" />
        </Grid>
      </Grid>
    </div>
  );
};
export default EntryField;
