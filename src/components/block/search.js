import React, { Component } from 'react';
import './navigation.css';


class Search extends Component {
  
  render() {
      
     return (
            <nav className="navbar">
                  <div class="input">
                     <div class="input-group-prepend">
                         <div class="input-group-text">
                           <i class="fas fa-search"></i>
                        </div>
                     </div>
                     <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" />
                  </div>
                  <div>Push</div>  
                  <div>User</div>  
            </nav>   
                
          );
        }
    
    
}


export default Search;
