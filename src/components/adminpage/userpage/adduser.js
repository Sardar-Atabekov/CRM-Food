import React, { Component } from 'react';
import getData from '../../requests/getData';
import './waiter.css';
import Navigation from '../../block/navigation.js';
import Search from '../../block/search.js';
import operatorImg from '../../images/Screenshot.png';

const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'users';



class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  
  async componentDidMount() {
    getData(API + DEFAULT_QUERY)
    .then((body)=> {
        this.setState({data: body});
    });
  }

  render() {
    let { data } = this.state;
    console.log(data);
   
    console.log(operatorImg);
    
    
    
     return (
            <div className="waiterWrapper">
                <aside>
                  <Navigation/> 
                </aside>
                <header>
                  <Search/>
                 
                </header> 
                <main>
                    <form>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        <input /><br/>
                        
                    </form>
                </main>
                <footer>footer</footer>
            </div>
          );
        }
    
    
}

export default addUser;
