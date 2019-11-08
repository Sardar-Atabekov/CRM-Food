import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CookPage from './components/cookpage/cook';
import BarmenPage from './components/barmenpage/barmen';
import LoginPage from './components/loginpage/login';
import adminPage from './components/adminpage/admin.js';
import waiterPage from './components/adminpage/userpage/waiter.js';
import addUser from './components/adminpage/userpage/adduser.js';
import UserPage from './components/adminpage/userpage/user.js';
import menuPage from './components/adminpage/menupage/menu.js';
import MealsPage from './components/adminpage/menupage/meals.js';
import addMeal from './components/adminpage/menupage/addmeal.js';
import Tables from './components/adminpage/tablepage/tables.js';
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
                  <Route path="/category" exact component={menuPage}/>
                  <Route path="/admin/meals" exact component={MealsPage}/>
                  <Route path="/meals" exact component={MealsPage}/>
                  <Route path="/admin/adduser" exact component={addUser}/>
                  <Route path="/adduser" exact component={addUser}/>
                  <Route path="/addmeal" exact component={addMeal}/>
                  <Route path="/tables" exact component={Tables}/>
                  <Route path="/user/:id" exact component={UserPage}/>
              </Switch>
              
          </React.Fragment>
      );
  }
}

export default App;



