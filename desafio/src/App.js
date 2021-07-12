import React from "react";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core";
import Home from "./components/Home";
import ApiManager from "./services/ApiManager";
import SearchCoin from "./services/SearchCoin";

const useStayles = makeStyles({
  root: {
    background: "blue",
    height: "100vh",
  },
});

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#607d8b",
      },
      secondary: {
        main: "#78909c",
      },
    },
  });

  const classes = useStayles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
