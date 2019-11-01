import React, { Component } from 'react';
import getData from '../../requests/getData';
import './meals.css';

const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'meals';



class MealsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    
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

    
    
     return (
            <div className="menuWrapper">
                <header className="menu"> Menu </header>   
                <main className="content">
                <table>
                        <tbody>
                        <tr> 
                            <th>Названия</th> 
                                                  
                            <th>Категория</th>
                            <th>Статус</th>
                            <th>Вес</th>   
                            <th>Цена</th>
                            
                        </tr>
                       {    
                        data.map(meal=>
                    
                        <tr key={meal.id}>   
                                                
                          <td>{meal.name}</td>
                          
                          <td>{meal.categoryName}</td>
                          <td>
                             <label className="switch">
                                <input type="checkbox"/>
                                <span className="slider round"></span>
                            </label>
                          </td>
                          <td>{meal.weight}</td>
                          <td>{meal.price}</td>
                        </tr>
                       
                    
                    )  }
                        </tbody>
                    </table>                
                  
                </main>
            
            </div>
          );
        }
    
    
}


export default MealsPage;
