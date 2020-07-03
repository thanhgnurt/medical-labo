import * as actionTypes from './../constantActions/ui';

const initialState = {
    showLoading: false
}

const uiReducer = (state= initialState, action)=>{
    switch (action.type) {
        case actionTypes.OPEN_LOADING:
            return {...state, showLoading : true}
        case actionTypes.CLOSE_LOADING:
            
            return {...state, showLoading : false}
    
        default:
            return {...state}
    }
}

export default uiReducer