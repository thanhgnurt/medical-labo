import React from "react";
import Navbar from "../../components/UserModule/Navbar";
import { connect } from "react-redux";
import { mobileMenuToggle } from "./../../redux/actions/userPape";
import MenuMobiles from "../../components/UserModule/Navbar/MenuMobiles";

function NavbarContainer(props) {
  const mobileMenuToggle = () => {
    props.mobileMenuToggle();
  };
  return (
    <div>
      <Navbar
        mobileMenuToggle={mobileMenuToggle}
        mobileMenu={props.userPape.mobileMenu}
      />
      <MenuMobiles
        mobileMenuToggle={mobileMenuToggle}
        mobileMenu={props.userPape.mobileMenu}
      />
      {props.children}
    </div>
  );
}
const mapStateToProps = (state) => ({
  userPape: state.userPape,
});
const mapDispateToProps = (dispatch) => ({
  mobileMenuToggle: () => {
    dispatch(mobileMenuToggle());
  },
});
export default connect(mapStateToProps, mapDispateToProps)(NavbarContainer);
