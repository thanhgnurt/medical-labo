import React from 'react';
import HeathOfLifeItem from './../../components/UserModule/HealthOfLife/HealthOfLifeItem';
import { animateScroll as scroll } from "react-scroll";
// import { useParams } from "react-router-dom";
import {connect} from "react-redux"


function HeatthOfLifeItemContainer(props) {
    // let {id} = useParams();
    
    const {listGroupTest}= props;
    let groupTest = {};
    const findId=(id)=>{
        for (let i = 0; i < listGroupTest.length; i++) {
            if (listGroupTest[i].id===id) {
                return i;
                
            }
        }

    }
    if(listGroupTest.length>0){
        groupTest = listGroupTest[findId("001")]

    }

    scroll.scrollTo(0);

    return (
        <HeathOfLifeItem groupTest={groupTest}/>
    )
}
const mapStateToProps = state=>({
    listGroupTest: state.listGroupTest.listGroupTest

})
const mapDispatchToProps = dispatch=>({

})
export default connect(mapStateToProps, mapDispatchToProps)(HeatthOfLifeItemContainer)