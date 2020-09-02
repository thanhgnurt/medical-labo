import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

export default function HealthOfLifeItem(props) {
  const { listGroupTest } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
        >
          {listGroupTest.length > 0 ? listGroupTest[0].description : ""}
          
        </Typography>
      </Container>
    </React.Fragment>
  );
}
