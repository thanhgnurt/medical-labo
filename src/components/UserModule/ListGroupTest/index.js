import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AppsIcon from "@material-ui/icons/Apps";
import React from "react";
import * as Scroll from "react-scroll";
import GroupTestItem from "./GroupTestItem";
import styles from "./styles";

function ListGroupTest(props) {
  const { devideGroupTest, classes, paperSelect } = props;
  const showGroupTest = () => {
    if (devideGroupTest.length > 0) {
      return devideGroupTest[paperSelect - 1].map((setTest, index) => {
        return (
          <Grid xs={12} md={4} sm={6} item key={index}>
            <GroupTestItem setTest={setTest} />
          </Grid>
        );
      });
    }
  };

  return (
    <Scroll.Element name="CATEGORY_TEST">
      <div className={classes.header_paper} id="ID_CATEGORY_TEST">
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <div className={classes.root}>
              <div className={classes.tittle}>
                <AppsIcon />
                <span className={classes.tittleText}>Danh Mục Xét Nghiệm</span>
              </div>
              <Grid container spacing={3} direction="row">
                {showGroupTest()}
              </Grid>
            </div>
          </Container>
        </React.Fragment>
      </div>
    </Scroll.Element>
  );
}

export default withStyles(styles)(ListGroupTest);
