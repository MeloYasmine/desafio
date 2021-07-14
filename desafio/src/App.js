import React from "react";
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core";
import Home from "./components/Home";
import ApiManager from "./services/ApiManager";
import SearchCoin from "./services/CoinDetail";
import { Route, Switch, Redirect } from "react-router-dom";
import DataCoin from "./components/DataCoin";

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
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home"/>
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/SearchCoin">
          <SearchCoin />
        </Route>
        <Route path="/DataCoin" exact>
          <DataCoin />
        </Route>
        <Route path="/DataCoin/:coinName">
          <DataCoin />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
