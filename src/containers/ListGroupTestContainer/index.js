import React from "react";
import { connect } from "react-redux";
import BasicPagination from "../../components/UserModule/BasicPagination";
import ListGroupTest from "../../components/UserModule/ListGroupTest";
import {
  fetchListGroupTestRequest,
  selectPaperTest
} from "./../../redux/actions/listGroupTest";

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



  return (
    <div>
      
      <ListGroupTest
        devideGroupTest={devideGroupTest}
        paperSelect={paperSelect}
      />
      <BasicPagination
        selectPaperTest={selectPaperTest}
        papers={totalPapers(6)}
        page ={paperSelect}
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
