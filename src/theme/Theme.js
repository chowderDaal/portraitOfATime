import { createTheme } from "@material-ui/core/styles";

const Theme = createTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiButton: {
      label: {
        color: "#f1f1f1",
      },
    },
  },
});
export default Theme;
