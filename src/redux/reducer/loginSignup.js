import * as loginSignupTypes from "../constantActions/loginSignup";

const initialState = {
  loginOpen: true,
  signupOpen: true,
};

const loginSignup = (state = initialState, action) => {
  switch (action.type) {
    case loginSignupTypes.LOGIN_DIALOG_TOGGLE:
      return {
        loginOpen: action.toggle,
        signupOpen: true,
      };

    case loginSignupTypes.SIGNUP_DIALOG_TOGGLE:
      return {
        loginOpen: true,
        signupOpen: true,
      };

    default:
      return { ...state };
  }
};

export default loginSignup;
