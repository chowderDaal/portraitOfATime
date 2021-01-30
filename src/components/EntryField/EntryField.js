import { useState } from "react";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import MoreVertRoundedIcon from "@material-ui/icons/MoreVertRounded";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
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
      {selectedOption === "Task" && (
        <TextField
          id="newTask"
          name="newTask"
          className="textFieldWidth"
          margin="dense"
          placeholder="New Task"
        />
      )}

      {selectedOption === "Note" && (
        <TextField
          id="newNote"
          name="newNotes"
          className="textFieldWidth"
          margin="dense"
          placeholder="New Note"
          multiline={true}
        />
      )}

      <MoreVertRoundedIcon
        className="verticalPadding growIcon"
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

      <AddRoundedIcon className="addIconPadding growIcon" />
    </div>
  );
};
export default EntryField;
