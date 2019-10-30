import React, { Component } from 'react';
// import axios from 'axios';
import './login.css';


class LoginPage extends Component {
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
                <div className="login">
                <h1>LOGIN</h1>
                    <form className="loginForm">
                        <input className="loginInput" type="text" placeholder="Username" /><br/>
                        <input className="loginInput" type="password" placeholder="Password" />
                        <button>LOGIN </button><br/>
                    </form>

                </div>
          );
        }
    
    
}


export default LoginPage;




