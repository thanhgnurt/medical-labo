import * as actionTypes from './../constantActions/admin';

const initialState = {};

const adminReducer = (state= initialState, action)=>{
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            console.log(action.payload);
            
            return {...state}
        case actionTypes.ADMIN_LOGIN_FAILD:
            
            return {...state}
    
        default:
            return {...state}
    }
}

export default adminReducer;