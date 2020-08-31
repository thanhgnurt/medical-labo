import React from 'react';
import DetailTest from './../../components/UserModule/DetailTest';
import { animateScroll as scroll } from "react-scroll";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

function DetailTestContainer(props) {
    let {id} = useParams()
    const {listGroupTest}= props
    scroll.scrollTo(0);
    return (
        <DetailTest listGroupTest={listGroupTest} id={id}/>
    )
}
const mapStateToProps = state=>({
    listGroupTest: state.listGroupTest.listGroupTest

})
const mapDispatchToProps = dispatch=>({

})
export default connect(mapStateToProps, mapDispatchToProps)(DetailTestContainer)
