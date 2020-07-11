import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import GroupTestItem from "../GroupTestItem";
import MenuLaboratorys from "../MenuLaboratorys";
import styles from "./styles";

function ListGroupTest(props) {
  const { divideGroup, classes, paperSelect } = props;
  console.log(paperSelect);
  
  const showGroupTest = (divideGroup) => {
    if (divideGroup.length > 0) {
      return divideGroup[paperSelect-1].map((groupTest, index) => {
        return (
          <Grid xs={12} md={4} sm={6} item key={index}>
            <GroupTestItem groupTest={groupTest} />
          </Grid>
        );
      });
    }
  };

  return (
    <div className={classes.header_paper}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <div className={classes.root}>
            <MenuLaboratorys />
            <Grid container spacing={3} direction="row">
              {showGroupTest(divideGroup)}
            </Grid>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default withStyles(styles)(ListGroupTest);
