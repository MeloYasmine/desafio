/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  alpha,
} from '@material-ui/core';
import ExitToApp from '@material-ui/icons/ExitToApp';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router-dom';
import ApiManager from '../services/ApiManager';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // boxShadow: 'none',
  },
  icons: {
    // paddingRight: theme.spacing(5),
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    height: 30,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

function ComponentAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const [enteredTeste, setTeste] = useState('');

  const handleSearch = (event) => {
    console.log(event.target.value);
    console.log(event);
    if (event.key === 'Enter') {
      setTeste(event.target.value);
      history.push(`/DataCoin/${enteredTeste}`);
    }
  };

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        />
        <img src="/images/logo.png" alt="logo" className={classes.logo} />
        <Typography variant="h6" className={classes.title}>
          Criptomoedas
        </Typography>

        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search???"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onKeyPress={handleSearch}
          />
        </div>

        <div className={classes.grow} />
        <IconButton className={classes.icons} color="inherit">
          <ExitToApp />
        </IconButton>
      </Toolbar>

    </AppBar>
  );
}

export default ComponentAppBar;
