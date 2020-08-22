import { Checkbox, Grid } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import React from "react";
import TableBodyResult from "../TableBodyResult";
import TableResultHeader from "./../TableResultHeader";

const normalValue = {
  creatinin: {
    below: 63,
    above: 110,
    unit: "mg/L",
  },
  ure: {
    below: 63,
    above: 110,
    unit: "mg/L",
  },
  ast: {
    below: 63,
    above: 110,
    unit: "mg/L",
  },
  alt: {
    below: 63,
    above: 110,
    unit: "mg/L",
  },
};

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 10px",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  zoom: {
    marginLeft: 10,
    marginTop: 10,
  },
}));

export default function ResultTest(props) {
  const { resultTest } = props;
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = resultTest.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, resultTest.length - page * rowsPerPage);

  return (
    <div>
      <Checkbox
        indeterminate={
          selected.length > 0 && selected.length < resultTest.length
        }
        checked={resultTest.length > 0 && selected.length === resultTest.length}
        onChange={handleSelectAllClick}
        inputProps={{ "aria-label": "select all desserts" }}
        className={classes.checkbox}
      />
      <TableContainer>
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size={dense ? "medium" : "small"}
          aria-label="enhanced table"
        >
          <TableResultHeader
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={resultTest.length}
          />

          <TableBodyResult
            stableSort={stableSort}
            getComparator={getComparator}
            order={order}
            orderBy={orderBy}
            rowsPerPage={rowsPerPage}
            page={page}
            dense={dense}
            emptyRows={emptyRows}
            handleClick={handleClick}
            selected={selected}
            rows={resultTest}
            normalValue={normalValue}
          />
        </Table>
      </TableContainer>
      <Grid container justify="space-between" direction="row-reverse">
        <Grid item>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={resultTest.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            labelRowsPerPage="Số hàng mỗi trang"
          />
        </Grid>
        <Grid item>
          <FormControlLabel
            className={classes.zoom}
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label={dense ? <ZoomOutIcon /> : <ZoomInIcon />}
          />
        </Grid>
      </Grid>
    </div>
  );
}
