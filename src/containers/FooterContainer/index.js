import React from 'react';
import Footer from '../../components/UserModule/Footer';
import {connect} from 'react-redux';


function FooterContainer(props) {

    return (
        <Footer/>
    )
}
const mapStateToProps = state =>({

});
const mapDispatchToProps = dispatch =>({

})
export default connect(mapStateToProps, mapDispatchToProps) (FooterContainer);