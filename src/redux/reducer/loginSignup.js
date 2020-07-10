import * as loginSignupTypes from "../constantActions/loginSignup";

const initialState = {
  loginOpen: false,
  signupOpen: false,
};

const loginSignup = (state = initialState, action) => {
  switch (action.type) {
    case loginSignupTypes.LOGIN_DIALOG_TOGGLE:
      return {
        loginOpen: !state.loginOpen,
        signupOpen: false,
      };

    case loginSignupTypes.SIGNUP_DIALOG_TOGGLE:
      return {
        loginOpen: false,
        signupOpen: !state.signupOpen
      };

    default:
      return { ...state };
  }
};

export default loginSignup;
