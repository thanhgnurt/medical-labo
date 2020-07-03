import { combineReducers } from "redux";
import listGroupTest from "./listGroupTest";
import loginSignup from './loginSignup';
import userPape from './userPape';
import theme from './theme';
import ui from './ui';

const rootReducer = combineReducers({
  listGroupTest,
  loginSignup,
  userPape,
  theme,
  ui
});
export default rootReducer;
