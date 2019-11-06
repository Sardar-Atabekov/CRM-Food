import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CookPage from './components/cookpage/cook';
import BarmenPage from './components/barmenpage/barmen';
import LoginPage from './components/loginpage/login';
import adminPage from './components/adminpage/admin.js';
import waiterPage from './components/adminpage/userpage/waiter.js';
import addUser from './components/adminpage/userpage/adduser.js';
import menuPage from './components/adminpage/menupage/menu.js';
import MealsPage from './components/adminpage/menupage/meals.js';
class App extends Component {
  render() {
      return (
          <React.Fragment>

              <Switch> 
                  <Route path="/" exact component={LoginPage}/> 
                  <Route path="/barmen" exact component={BarmenPage}/>
                  <Route path="/cook" exact component={CookPage}/>
                  <Route path="/admin" exact component={adminPage}/>
                  <Route path="/users" exact component={waiterPage}/>
                  <Route path="/menu" exact component={menuPage}/>
                  <Route path="/admin/meals" exact component={MealsPage}/>
                  <Route path="/meals" exact component={MealsPage}/>
                  <Route path="/adduser" exact component={addUser}/>
              </Switch>
              
          </React.Fragment>
      );
  }
}

export default App;



