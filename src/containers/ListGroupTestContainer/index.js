import React from "react";
import { connect } from "react-redux";
import ListGroupTest from "../../components/UserModule/ListGroupTest";
import {
  fetchListGroupTestRequest,
  selectPaperTest,
} from "./../../redux/actions/listGroupTest";
import BasicPagination from "../../components/UserModule/BasicPagination";
import { Switch, Route } from "react-router-dom";
import Demo from "./demo";
import ListGroupTestDemo from "./../../components/UserModule/ListGroupTestDemo";
import GroupTestLayoutRoute from './../../commons/Layout/GroupTestLayoutRoute';


function ListGroupTestContainer(props) {
  const { listGroupTest, paperSelect } = props.listGroupTest;
  const totalPapers = (n) => {
    let papers = 0;
    if ((listGroupTest.length + 1) % n === 0) {
      papers = (listGroupTest.length + 1) / n;
    } else {
      papers =
        (listGroupTest.length + 1 - ((listGroupTest.length + 1) % n) + n) / 6;
    }
    return papers;
  };
  const papers = (listGroupTest.length + 1) / 6;
  const divideGroup = () => {
    let devideGroupTest = [];
    if (listGroupTest.length > 0) {
      for (let i = 0; i < papers; i++) {
        let temp = [];
        for (let j = i * 6; j < i * 6 + 6 && j < listGroupTest.length; j++) {
          temp.push(listGroupTest[j]);
        }

        devideGroupTest.push(temp);
      }
    }
    return devideGroupTest;
  };
  const devideGroupTest = divideGroup(6);

  const selectPaperTest = (paper) => {
    props.selectPaperTest(paper);
  };

  const renderListGroupTest = (ListGroupTestDemo) => {
    let xhtml = [];
    if (listGroupTest.length > 0) {
      for (let i = totalPapers(6); i >= 1; i--) {
        xhtml.push(
          <GroupTestLayoutRoute key={i} page={i} devideGroupTest={devideGroupTest} path={i===1 ? "/" : `/trang-${i}`} component={ListGroupTestDemo}/>
        )
      }
    }
    return xhtml;
  };

  return (
    <div>
      <Switch>
        {/* <Route path="/trang1">
          <Demo demo="trang 1" />
        </Route>
        <Route path="/trang2">
          <Demo demo="Trang 2" />
        </Route> */}
        {renderListGroupTest(ListGroupTestDemo)}
      </Switch>

      {/* <ListGroupTest divideGroup={devideGroupTest} paperSelect={paperSelect} /> */}
      <BasicPagination
        selectPaperTest={selectPaperTest}
        papers={totalPapers(6)}
      />
    </div>
  );
}
const mapStateToProps = (state) => ({
  listGroupTest: state.listGroupTest,
});

const mapDispatchToProps = (dispatch) => ({
  fetchListGroupTest: () => {
    dispatch(fetchListGroupTestRequest());
  },
  selectPaperTest: (paper) => {
    dispatch(selectPaperTest(paper));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListGroupTestContainer);
