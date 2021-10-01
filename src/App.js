import React from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import SearchCoin from './services/CoinDetail';
import DataCoin from './components/DataCoin';
import Teste from './components/Teste';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#607d8b',
      },
      secondary: {
        main: '#78909c',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Teste">
          <Teste />
        </Route>
        <Route path="/SearchCoin">
          <SearchCoin />
        </Route>
        <Route path="/DataCoin/:name" exact>
          <DataCoin />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
