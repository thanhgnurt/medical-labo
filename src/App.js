import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import AppContainer from "./containers/AppContainer";


const store = configureStore();

function App() {
  return (
    <Provider store={store}>
   
      <BrowserRouter>
     <AppContainer/>
      </BrowserRouter>
    </Provider>
  );
}



export default (App);
