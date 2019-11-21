import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CookPage from './components/cookpage/cook';
import BarmenPage from './components/barmenpage/barmen';
import LoginPage from './components/loginpage/login';
import waiterPage from './components/adminpage/userpage/users.js';
import addUser from './components/adminpage/userpage/adduser.js';
import UserPage from './components/adminpage/userpage/user.js';
import Categories from './components/adminpage/menupage/Categories.js';
import MealsPage from './components/adminpage/menupage/meals.js';
import MealPage from './components/adminpage/menupage/meal.js';
import addMeal from './components/adminpage/menupage/addmeal.js';
import Tables from './components/adminpage/tablepage/tables.js';
import HistoryTransaction from './components/adminpage/transaction/HistoryTransaction.js';
import Sales from './components/adminpage/statistics/sales/sales';
import Traffic from './components/adminpage/statistics/orders/order';
import BarPage from './components/adminpage/statistics/bar/bar.js';
import KitchenPage from './components/adminpage/statistics/kitchen/kitchen.js';
import TestsPage from './test.js';

class App extends Component {
  render() {
      return (
          <React.Fragment>

              <Switch> 
                  <Route path="/" exact component={LoginPage}/> 
                  <Route path="/barmen" exact component={BarmenPage}/>
                  <Route path="/cook" exact component={CookPage}/>
                  <Route path="/users" exact component={waiterPage}/>
                  <Route path="/category" exact component={Categories}/>
                  <Route path="/admin/meals" exact component={MealsPage}/>
                  <Route path="/meals" exact component={MealsPage}/>
                  <Route path="/admin/adduser" exact component={addUser}/>
                  <Route path="/adduser" exact component={addUser}/>
                  <Route path="/addmeal" exact component={addMeal}/>
                  <Route path="/tables" exact component={Tables}/>
                  <Route path="/user/:id" exact component={UserPage}/>
                  <Route path="/meal/:id" exact component={MealPage}/>
                  <Route path="/transactions" exact component={HistoryTransaction}/>
                  <Route path="/sales" exact component={Sales}/>
                  <Route path="/traffic" exact component={Traffic}/>
                  <Route path="/bar" exact component={BarPage}/>
                  <Route path="/kitchen" exact component={KitchenPage}/>
                  <Route path="/tests" exact component={TestsPage}/>

              </Switch>
              
          </React.Fragment>
      );
  }
}

export default App;


 
