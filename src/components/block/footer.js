import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';


class Footer extends Component {
   
  render() {
      
     return (
            <ul className="footerComponent">
              <li><Link to={'/admin'} className="categories">Home</Link></li>
              <li><Link to={'/admin'} className="categories">Home</Link></li>
              <li><Link to={'/barmen'} className="categories">Barmen</Link></li>
               
                
                
            </ul>   
                
          );
        }
    
    
}


export default Footer;
