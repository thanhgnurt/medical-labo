import { combineReducers } from "redux";
import listGroupTest from "./listGroupTest";
import userPape from './userPape';
import theme from './theme';
import ui from './ui';
import userReducer from './userReducer';
import resultTest from './resultTest';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  listGroupTest,
  userPape,
  theme,
  ui,
  userReducer,
  resultTest,
  form: formReducer
});
export default rootReducer;
