import React, { Component } from 'react';
// import axios from 'axios';
import './../loginpage/login.css';
import Navigation from '../block/navigation.js';

class adminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  

  render() {    
    
     return (     
       <div>
          <Navigation/>
       </div>  
               
                
          );
        }
    
    
}


export default adminPage;




