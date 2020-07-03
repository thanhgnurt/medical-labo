import * as userPageType from './../constantActions/userPape';

const initialState = true

const theme = (state=initialState, action)=>{
    switch (action.type) {
        case userPageType.CHANGE_THEME:
            
            return !state
    
        default:
            return state
    }
}

export default theme;