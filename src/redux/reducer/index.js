import { combineReducers } from "redux";
import listGroupTest from "./listGroupTest";
import userPape from './userPape';
import theme from './theme';
import ui from './ui';
import userReducer from './userReducer';
import resultTest from './resultTest';
import adminReducer from './adminReducer';
import { reducer as formReducer } from 'redux-form';
import newsHealthOfLife from './newsHealthOfLife';


const rootReducer = combineReducers({
  listGroupTest,
  userPape,
  theme,
  ui,
  userReducer,
  resultTest,
  adminReducer,
  newsHealthOfLife,
  form: formReducer
});
export default rootReducer;
