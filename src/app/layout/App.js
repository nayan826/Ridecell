import React from "react";
import HomePage from "../../features/home/homePage";
import { Route, withRouter, Switch } from "react-router-dom";
import UserScreen from "./userScreen";
import Register from "../../features/home/register";
import { ToastContainer} from "react-toastify";
//import { Observer } from "mobx-react-lite";
const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" />  
      <Switch>
        <Route path="/login" component={HomePage} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={UserScreen} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
