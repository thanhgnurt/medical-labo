import React from 'react';
import DetailTest from './../../components/UserModule/ListGroupTest/DetailTest';
import { animateScroll as scroll } from "react-scroll";
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

function DetailTestContainer(props) {
    let {id} = useParams();
    
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
        groupTest = listGroupTest[findId(id)]

    }
    scroll.scrollTo(0);
    return (
        <DetailTest groupTest={groupTest}/>
    )
}
const mapStateToProps = state=>({
    listGroupTest: state.listGroupTest.listGroupTest

})
const mapDispatchToProps = dispatch=>({

})
export default connect(mapStateToProps, mapDispatchToProps)(DetailTestContainer)
