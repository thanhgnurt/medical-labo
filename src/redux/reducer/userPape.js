import * as userPapeTypes from './../constantActions/userPape';

const initialState = {
    mobileMenu : false
}

const userPape = (state=initialState, action)=>{
    switch (action.type) {
        case userPapeTypes.MOBILE_MENU_TOGGLE:
            
            return {...state, mobileMenu:!state.mobileMenu}
    
        default:
            return {...state}
    }
}

export default userPape