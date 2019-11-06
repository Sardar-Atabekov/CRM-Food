import React, { Component } from 'react';
import {getData} from "./../../requests";
import './waiter.css';
import Navigation from '../../block/navigation.js';
import Search from '../../block/search.js';
import operatorImg from '../../images/Screenshot.png';
import Footer from '../../block/footer.js';
const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'users';



class waiterPage extends Component {
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
       
    
    

     return (
            <div className="wrapper">
                <Navigation/> 
                <div className="container">
                  <header className="main-secrh"><Search/></header> 
                  <main className="waiterContent">
                      
                      <table>
                          <tbody>
                          <tr> 
                              <th>Avatar</th>                          
                              <th>Name</th>
                                                      
                              <th>Age</th>
                              <th>Gender</th>
                              <th>Start work date</th>
                              <th>Phone</th>
                              <th>Email</th>
                              <th>Login</th>
                              <th>Password</th>
                              <th>Operation</th>
                          </tr>
                        {    
                          data.map(user=>
                      
                          <tr key={user.id}>   
                            <td className="avatar">
                              <img alt="avatar foto" src={`https://cdn2.static1-sima-land.com/items/2973837/1/700-nw.jpg`} />
                            </td>                       
                            <td>{user.firstName + " " + user.lastName}</td>
                            
                            
                            <td>{new Date().getFullYear() - new Date(user.dateBorn).getFullYear()}</td>
                            <td>{user.gender}</td>
                            <td>
                              <time dateTime={user.startWorkDate}>
                              {new Date().getDate(user.startWorkDate)+ "."+new Date().getMonth(user.startWorkDate)+"."+new Date().getFullYear(user.startWorkDate)}
                              </time>
                            </td>
                              
                            <td>{user.phoneNumber}</td>
                            <td>{user.email}</td>
                            <td>{user.login}</td>
                            <td>{user.password}</td>
                            <td><img alt="src" src={operatorImg}/></td>
                          </tr>
                        
                      
                      )  }
                          </tbody>
                      </table> 
                    
                  </main>
                  <footer className="main-footer"><Footer/></footer>
                </div>
            </div>
          );
        }
    
    
}


export default waiterPage;
