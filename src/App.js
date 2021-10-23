import Routes from "./components/Routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./theme/Theme";
import "./app.css";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Routes />
      </div>
    </ThemeProvider>
  );
};

export default App;
