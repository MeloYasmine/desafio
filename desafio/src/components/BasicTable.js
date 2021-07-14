import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ApiManager from "../services/ApiManager";
import { NavLink } from "react-router-dom";
import DataCoin from "./DataCoin";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  appBar: {
    //boxShadow: 'none',
  },
  icons: {
    //paddingRight: theme.spacing(5),
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

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

function BasicTable(props) {
  const classes = useStyles();

  const handleClick = (event, name) => {
    console.log(event, name);
  };

  return (
    <div className={classes.root}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>COIN</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">isFrozen</TableCell>
              <TableCell align="right">
                Lowest purchase price currently
              </TableCell>
              <TableCell align="right">
                Highest price in the last 24 hours
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.teste.map((post) => (
              <TableRow
                hover
                onClick={(event) => handleClick(event, post[0])}
                key={post[0]}
              >
                <TableCell component="th" scope="row">
                  {post[0]}
                </TableCell>
                <TableCell align="right">{post[1].id}</TableCell>
                <TableCell align="right">
                  {post[1].isFrozen == 0 ? "Open" : "close"}
                </TableCell>
                <TableCell align="right">{post[1].lowestAsk}</TableCell>
                <TableCell align="right">{post[1].high24hr}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default BasicTable;
