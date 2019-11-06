import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';


class Footer extends Component {
   
  render() {
      
     return (
            <nav className="footerComponent">
                <Link to={'/admin'} className="categories">Home</Link>
                <Link to={'/cooker'} className="categories">Cooker</Link>
                <Link to={'/barmen'} className="categories">Barmen</Link>
                
                
            </nav>   
                
          );
        }
    
    
}


export default Footer;
