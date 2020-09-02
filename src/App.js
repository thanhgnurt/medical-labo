import React from "react";
import AppContainer from "./containers/AppContainer";
import GlobalLoading from "./components/GlobalLoading";


function App() {
  return (
    <React.Fragment>
      <GlobalLoading />
      <AppContainer />
    </React.Fragment>
  );
}

export default App;
