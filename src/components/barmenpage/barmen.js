import React, { Component } from 'react';

import './../cookpage/cook.css';
import {getData} from "./../requests";
import {сheckStatusFood, checkClassName, mealReady, orderReady} from "./check";

const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'barman/getActiveOrders';



class BarmenPage extends Component {
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
    
    let { data} = this.state;
    console.log(data);
    data= data.filter(a=>a.mealsList.some(s=>s.departmentName==="Бар"));
    
    
    
     return (
          <div className="backgroundCook">
            <div className="wrapperCook">

            {      
                
                data.map(order=>
                    <div className="cookItem" key={order.orderId}>
                        <header>
                            <span className="tableNumber">{`№${order.orderId}`}</span>
                            <span className="orderTime">{
                            new Date(order.dateTimeOrdered).getHours()+":"
                            +new Date(order.dateTimeOrdered).getMinutes()
                            }
                            
                            </span>
                            <button className="statusOrder" orderid={order.orderId} onClick={orderReady}>Готово!</button>
                        </header>
                        <main>
                            <div className="comments">
                                {order.comment}
                            </div>
                            
                            <ul>
                {order.mealsList.map(meal=><li orderid={order.orderId} className={checkClassName(meal.status)} key={meal.mealId}>{`${meal.mealName} x${meal.quantity} id=${meal.mealId} `} 
                <img mealid={meal.mealId} onClick={mealReady} className="btnImg" alt={meal.status} src={сheckStatusFood(meal.status)} /></li>)}
                            </ul>
                            
                           
                        </main>
                    </div> 
                )
            }   
            </div>
          </div>
          );
        }
    
    
}


export default BarmenPage;
