import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CookPage from './components/cookpage/cook';
import BarmenPage from './components/barmenpage/barmen';
import LoginPage from './components/loginpage/login';
import adminPage from './components/adminpage/admin.js';
import waiterPage from './components/adminpage/waiterpage/waiter.js';
import menuPage from './components/adminpage/menupage/menu.js';
import MealsPage from './components/adminpage/menupage/meals.js';
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
                  <Route path="/menu" component={menuPage}/>
                  <Route path="/meals" component={MealsPage}/>
              </Switch>
              
          </React.Fragment>
      );
  }
}

export default App;

