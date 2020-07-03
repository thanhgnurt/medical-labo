import * as loginSingupTypes from './../constantActions/loginSignup';

export const actLoginToggle = (toggle)=>({
 type : loginSingupTypes.LOGIN_DIALOG_TOGGLE,
 toggle
})
export const actSignupToggle = ()=>({
 type : loginSingupTypes.SIGNUP_DIALOG_TOGGLE
})

