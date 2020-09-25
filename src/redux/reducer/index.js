import { combineReducers } from "redux";
import listGroupTest from "./listGroupTest";
import userPape from './userPape';
import theme from './theme';
import ui from './ui';
import userReducer from './userReducer';
import resultTest from './resultTest/resultTest';
import adminReducer from './adminReducer';
import { reducer as formReducer } from 'redux-form';
import newsHealthOfLife from './newsHealthOfLife';
import tabResult from './resultTest/tabResultAdvisory';
import screenDoctor from './screenDoctor';


const rootReducer = combineReducers({
  listGroupTest,
  userPape,
  theme,
  ui,
  userReducer,
  resultTest,
  adminReducer,
  newsHealthOfLife,
  tabResult,
  screenDoctor,
  form: formReducer
});
export default rootReducer;
