import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CookPage from './components/cookpage/cook';
import BarmenPage from './components/barmenpage/barmen';
import LoginPage from './components/loginpage/login';
class App extends Component {
  render() {
      return (
          <React.Fragment>

              <Switch> 
                  <Route exact path="/" component={LoginPage}/> 
                  <Route path="/barmen" component={BarmenPage}/>
                  <Route path="/cook" component={CookPage}/>
            
              </Switch>
              
          </React.Fragment>
      );
  }
}

export default App;

