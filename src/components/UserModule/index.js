import React from "react";
import NavBar from "./Navbar";
import MenuMobile from "./MenuMobiles";
import Carousel from "./Carousel";
import { withStyles } from "@material-ui/core";
import styles from "./styles";

function UserModule(props) {
  const { classes } = props;
  return (
    <div className={classes.header_paper}>
      <NavBar
        mobileMenuToggle={props.mobileMenuToggle}
        mobileMenu={props.mobileMenu}
      />
      <MenuMobile
        mobileMenu={props.mobileMenu}
        mobileMenuToggle={props.mobileMenuToggle}
      />

      <div>
        <Carousel />
      </div>
    </div>
  );
}
export default withStyles(styles)(UserModule);
