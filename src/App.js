import Routes from "./components/Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Theme from "./theme/Theme";
import "./app.css";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className="App">
          <Routes />
        </div>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};

export default App;
