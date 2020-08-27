import React from 'react'
import HealthOfLife from '../../components/UserModule/HealthOfLife'
import { connect } from 'react-redux'

function HealthOfLifeContainer(props) {
    const {listNews}= props;
    return (
        <div id="health_of_life">

            <HealthOfLife listNews={listNews}/>
        </div>
    )
}
const mapStateToProps=state=>({
    listNews: state.newsHealthOfLife
})
const mapDispatchToProps=dispatch=>({

})
export default connect(mapStateToProps, mapDispatchToProps)(HealthOfLifeContainer)
