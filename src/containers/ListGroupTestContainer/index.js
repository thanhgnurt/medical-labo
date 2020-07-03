import React from "react";
import { connect } from "react-redux";
import ListGroupTest from "../../components/UserModule/ListGroupTest";
import { fetchListGroupTestRequest } from "./../../redux/actions/listGroupTest";
import { useEffect } from "react";

function ListGroupTestContainer(props) {
  useEffect(() => {
    props.fetchListGroupTest();
  }, []);
  const { listGroupTest } = props.listGroupTest;
  return <ListGroupTest listGroupTest={listGroupTest} />;
}
const mapStateToProps = (state) => ({
  listGroupTest: state.listGroupTest,
});

const mapDispatchToProps = (dispatch) => ({
  fetchListGroupTest: () => {
    dispatch(fetchListGroupTestRequest());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroupTestContainer);
