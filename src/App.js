import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CookPage from "./components/cookpage/cook";
import LoginPage from "./components/loginpage/login";
import BarmenPage from "./components/barmenpage/barmen";
import MealPage from "./components/adminpage/menupage/meal.js";
import UserPage from "./components/adminpage/userpage/user.js";
import Tables from "./components/adminpage/tablepage/tables.js";
import addUser from "./components/adminpage/userpage/adduser.js";
import MealsPage from "./components/adminpage/menupage/meals.js";
import addMeal from "./components/adminpage/menupage/addmeal.js";
import waiterPage from "./components/adminpage/userpage/users.js";
import Sales from "./components/adminpage/statistics/sales/sales";
import BarPage from "./components/adminpage/statistics/bar/bar.js";
import Traffic from "./components/adminpage/statistics/orders/order";
import Categories from "./components/adminpage/menupage/Categories.js";
import KitchenPage from "./components/adminpage/statistics/kitchen/kitchen.js";
import CookMealChange from "./components/cookpage/statusMeals/changeMealStatus";
import BarmanMealChange from "./components/barmenpage/statusMeals/changeMealStatus";
import ListArmoredTables from "./components/adminpage/bookingTable/ListArmoredTables";
import HistoryTransaction from "./components/adminpage/transaction/HistoryTransaction.js";
import NotFound from "./components/404/404.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/barmen" exact component={BarmenPage} />
          <Route path="/cook" exact component={CookPage} />
          <Route path="/users" exact component={waiterPage} />
          <Route path="/category" exact component={Categories} />
          <Route path="/meals" exact component={MealsPage} />
          <Route path="/adduser" exact component={addUser} />
          <Route path="/addmeal" exact component={addMeal} />
          <Route path="/tables" exact component={Tables} />
          <Route path="/user/:id" exact component={UserPage} />
          <Route path="/meal/:id" exact component={MealPage} />
          <Route path="/transactions" exact component={HistoryTransaction} />
          <Route path="/sales" exact component={Sales} />
          <Route path="/traffic" exact component={Traffic} />
          <Route path="/bar" exact component={BarPage} />
          <Route path="/bar/menu" exact component={BarmanMealChange} />
          <Route path="/barman/menu" exact component={BarmanMealChange} />
          <Route path="/kitchen" exact component={KitchenPage} />
          <Route path="/cook/menu" exact component={CookMealChange} />
          <Route path="/reservations" exact component={ListArmoredTables} />

          <Route path="*" exact component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
