import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import CookPage from './components/cookpage/cook';
class App extends Component {
  render() {
      return (
          <React.Fragment>

              <Switch>
                  {/* <Route exact path="/" component={ProductList}/>
                  <Route path="/barmen" component={Details}/> */}
                  <Route path="/cook" component={CookPage}/>
            
              </Switch>
              
          </React.Fragment>
      );
  }
}

export default App;

