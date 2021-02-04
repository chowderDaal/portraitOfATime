//TODO: figure out how to update the UI after child state is changed
import TaskEntry from "../TaskEntry/TaskEntry";
import NoteEntry from "../NoteEntry/NoteEntry";
import NoEntries from "../NoEntries/NoEntries";
import "./entries.css";

const Entries = (props) => {
  const returnEntryComponent = (
    type,
    content,
    complete,
    dayIndex,
    entryIndex
  ) => {
    if (type === "Task") {
      return (
        <TaskEntry
          key={entryIndex}
          content={content}
          complete={complete}
          dayIndex={dayIndex}
          entryIndex={entryIndex}
          handleCheckboxChange={props.handleCheckboxChange}
        />
      );
    }
    if (type === "Note") {
      return (
        <NoteEntry
          key={entryIndex}
          content={content}
          dayIndex={dayIndex}
          entryIndex={entryIndex}
        />
      );
    }
  };
  return (
    <div className="Entries fullWidth">
      {props.entries.length > 0 ? (
        props.entries.map((entry, index) =>
          returnEntryComponent(
            entry.type,
            entry.content,
            entry.complete,
            props.dayIndex,
            index
          )
        )
      ) : (
        <NoEntries />
      )}
    </div>
  );
};
export default Entries;
