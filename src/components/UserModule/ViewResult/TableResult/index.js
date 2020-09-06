import React from "react";
import { withStyles } from "@material-ui/core"; 
import styles from './styles';
import "./styles.css";
import TableHeader from './TableHeader';
import TableBody from "./TableBody";


function TableResult(props) {
  return (
    <div>
      <table className="table table-bordered table-striped px-4">
        <TableHeader/>
        <TableBody resultTest={props.resultTest}/>
      </table>
    </div>
  );
}
export default withStyles(styles)(TableResult)