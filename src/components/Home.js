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
import ComponentAppBar from './ComponentAppBar';

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

function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ComponentAppBar />
      <Box p={{ md: 7 }}>
        <ApiManager />
      </Box>
    </div>
  );
}

export default Home;
