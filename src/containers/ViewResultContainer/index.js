import React, {useEffect} from "react";
import ViewResult from "../../components/UserModule/ViewResult";
import { animateScroll as scroll } from "react-scroll";
import { connect } from "react-redux";
import {fetchResultRequest} from './../../redux/actions/userActions';

function ViewResultContainer(props) {
    const {fetchResultRequest}= props
    useEffect(()=>{
        fetchResultRequest()

    },[fetchResultRequest])
  scroll.scrollTo(0);
  
  return <ViewResult resultTest={props.resultTest} />;

}



const mapStateToProps = state=>({
    resultTest : state.resultTest
})

const mapDispatchToProps=dispatch=>({
    fetchResultRequest : ()=>{
        dispatch(fetchResultRequest())
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (ViewResultContainer)