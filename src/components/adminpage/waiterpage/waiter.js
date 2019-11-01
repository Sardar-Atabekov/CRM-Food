import React, { Component } from 'react';
import getData from '../../requests/getData';
import './waiter.css';
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
    console.log(data);
    data= data.filter(user=> user.roleName==="waiter");
    console.log(data);
    
    
    
     return (
            <div className="waiterWrapper">
                <header className="menu"> Menu </header>   
                <main className="content">
                    <header>
                        
                    </header>
                    <table>
                        <tbody>
                        <tr> 
                            <th>Avatar</th>                          
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Start work date</th>
                            <th>Phone</th>
                        </tr>
                       {    
                        data.map(user=>
                    
                        <tr key={user.id}>   
                          <td className="avatar">
                            <img alt="avatar foto" src={`https://cdn2.static1-sima-land.com/items/2973837/1/700-nw.jpg`} />
                          </td>                       
                          <td>{user.firstName}</td>
                          <td>{user.lastName}</td>
                          <td>{new Date().getFullYear() - new Date(user.dateBorn).getFullYear()}</td>
                          <td>{user.gender}</td>
                          <td>{user.startWorkDate}</td>
                          
                          <td>{user.phoneNumber}</td>
                        </tr>
                       
                    
                    )  }
                        </tbody>
                    </table> 
                  
                </main>
            
            </div>
          );
        }
    
    
}


export default waiterPage;
