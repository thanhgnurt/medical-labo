import LoginPageContainer from './../containers/LoginPageContainer';
import SignupPageContainer from './../containers/SignupPageContainer';
import AdminPageContainer from '../containers/AdminModuleContainer';
import UserModuleContainer from './../containers/UserModuleContainer';


export const ADMIN_ROUTES = [
  {
    path: "/admin",
    name: "Page admin",
    component: AdminPageContainer,
  },

];
export const USER_ROUTES = [
  {
    path : '/',
    name : 'Home Page User',
    // exact : true,
    component : UserModuleContainer,

  }
]

export const ROUTES = [
  {
    path: "/",
    name: "Login",
    component: LoginPageContainer,
  },
  {
    path: "/",
    name: "Sign Up",
    component: SignupPageContainer,
  },
];
