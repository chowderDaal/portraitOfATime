import Routes from "./components/Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { DragDropContext } from "react-beautiful-dnd";
import Theme from "./theme/Theme";
import "./app.css";

const App = () => {
  return (
    <DragDropContext>
      <ThemeProvider theme={Theme}>
        <div className="App">
          <Routes />
        </div>
      </ThemeProvider>
    </DragDropContext>
  );
};

export default App;
