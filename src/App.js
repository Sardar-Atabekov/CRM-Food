import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CookPage from './components/cookpage/cook';
import BarmenPage from './components/barmenpage/barmen';
import LoginPage from './components/loginpage/login';
import adminPage from './components/adminpage/admin.js';
import waiterPage from './components/waiterpage/waiter.js';


class App extends Component {
  render() {
      return (
          <React.Fragment>

              <Switch> 
                  <Route exact path="/" component={LoginPage}/> 
                  <Route path="/barmen" component={BarmenPage}/>
                  <Route path="/cook" component={CookPage}/>
                  <Route path="/admin" component={adminPage}/>
                  <Route path="/waiter" component={waiterPage}/>
              </Switch>
              
          </React.Fragment>
      );
  }
}

export default App;

