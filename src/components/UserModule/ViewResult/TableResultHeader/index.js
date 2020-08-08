  
import { withStyles } from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import PropTypes from "prop-types";
import React from "react";
import styles from './styles';

function TableResultHeader(props) {
  const {
    order,
    orderBy,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const headCells = [
    { id: "name", numeric: false, disablePadding: true, label: "Hóa Sinh" },
    { id: "result", numeric: true, disablePadding: false, label: "Kết quả" },
    {
      id: "normalValue",
      numeric: true,
      disablePadding: false,
      label: "Giá trị bình thường",
    },
    { id: "unit", numeric: true, disablePadding: false, label: "Đơn vị" },
    { id: "note", numeric: true, disablePadding: false, label: "Ghi chú" },
  ];

  return (
    <TableHead>
      
      <TableRow>
        {/* <TableCell padding="checkbox" >
          
          </TableCell> */}
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            padding={headCell.disablePadding ? "default" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              
              {headCell.label}
           
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

TableResultHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default withStyles(styles)(TableResultHeader);