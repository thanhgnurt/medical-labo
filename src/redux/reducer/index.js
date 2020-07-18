import { combineReducers } from "redux";
import listGroupTest from "./listGroupTest";
import userPape from './userPape';
import theme from './theme';
import ui from './ui';
import userReducer from './userReducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  listGroupTest,
  userPape,
  theme,
  ui,
  userReducer,
  form: formReducer
});
export default rootReducer;
