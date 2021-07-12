import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ApiManager from "../services/ApiManager";

const useStyles = makeStyles({
  table: {
    height: "100vh",
  },
});


function BasicTable(props) {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>COIN</TableCell>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">isFrozen</TableCell>
              <TableCell align="right">Lowest purchase price currently</TableCell>
              <TableCell align="right">Highest price in the last 24 hours</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.teste.map((post) => (
              <TableRow key={post[0]}>
                <TableCell component="th" scope="row">
                  {post[0]}
                </TableCell>
                <TableCell align="right">{post[1].id}</TableCell>
                <TableCell align="right">{post[1].isFrozen == 0 ? "Open" : "close"}</TableCell>
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
