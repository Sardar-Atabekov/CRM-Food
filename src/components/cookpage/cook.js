import React, { Component } from 'react';
import axios from 'axios';
import './cook.css';
import сheckStatusFood  from "./check.js";

const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'cook/getactiveorders';



class CookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  
  
  
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get(API + DEFAULT_QUERY);
 
      this.setState({
        data: result.data,
        isLoading: false,
        
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }
  render() {
    const { data, isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>;
    }
    console.log(data);
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    
     return (
            <div className="wrapper">
           
            {      
                
                data.map(a=>
                    <div className="item" key={a.id}>
                        <header>
                            <span className="tableNumber">№{a.id}</span>
                            <span className="orderTime">{
                            new Date(a.dateTimeOrdered).getHours()+":"
                            +new Date(a.dateTimeOrdered).getMinutes()
                            }
                            
                            </span>
                            <button className="statusOrder">Готово!</button>
                        </header>
                        <main>
                            <div className="comments">
                                {a.comment}
                            </div>
                            
                            <ul>
                            {a.mealsList.map(meal=><li key={meal.mealId}>{`${meal.mealName} x ${meal.quantity} id=${meal.mealId} `} 
                             <img  alt="book" width="30" height="27" src={сheckStatusFood(meal.status)} /></li>)}
                            </ul>
                            
                           
                        </main>
                    </div> 
                )
            }   
            </div>
          );
        }
    
    
}


export default CookPage;
