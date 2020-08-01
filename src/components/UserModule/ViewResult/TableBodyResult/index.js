import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

export default function TableBodyResult(props) {
  const {
    stableSort,
    getComparator,
    order,
    orderBy,
    page,
    rowsPerPage,
    dense,
    emptyRows,
    handleClick,
    selected,
    rows,
    normalValue
  } = props;
  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <TableBody>
      {stableSort(rows, getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;

          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={row.name}
              selected={isItemSelected}
            >
              {/* <TableCell padding="checkbox">
                <Checkbox
                  checked={isItemSelected}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </TableCell> */}
              <TableCell component="th" id={labelId} scope="row" padding="default">
                {row.name}
              </TableCell>
              <TableCell align="left" name="result">{row.result}</TableCell>
            <TableCell align="left" name="normalValue">{normalValue.creatinin.below} - {normalValue.creatinin.above}</TableCell>
              <TableCell align="left" name="unit">{normalValue.creatinin.unit}</TableCell>
              <TableCell align="left" name= "note">{row.result > normalValue.creatinin.above ? "binh thuong" : row.result < normalValue.creatinin.above && row.result > normalValue.creatinin.below ? (<span className="text-warning">giam</span>) : "tang"}</TableCell>
            </TableRow>
          );
        })}
      {emptyRows > 0 && (
        <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
}
