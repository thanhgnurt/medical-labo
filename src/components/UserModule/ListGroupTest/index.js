import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import GroupTestItem from "../GroupTestItem";
import MenuLaboratorys from "../MenuLaboratorys";
import styles from "./styles";

function ListGroupTest(props) {
  const { listGroupTest, classes } = props;
  const showGroupTest = (groupTests) => {
    if (groupTests.length > 0) {
      return groupTests.map((groupTest, index) => {
        return (
          <Grid item key={index}>
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
        <Container maxWidth="lg">
          <div className={classes.root}>
            <MenuLaboratorys />
            <Grid container spacing={3} justify="center" direction="row">
              {showGroupTest(listGroupTest)}
            </Grid>
          </div>
        </Container>
      </React.Fragment>
    </div>
  );
}

export default withStyles(styles)(ListGroupTest);
