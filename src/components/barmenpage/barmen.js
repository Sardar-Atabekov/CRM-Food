import React, { Component } from "react";
import Order from './Order';
import { getData } from "./../requests";


const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "barman/getActiveOrders";

class BarmenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    getData(API + DEFAULT_QUERY).then(body => {
      this.setState({ data: body });
    });
  }

  render() {
    let { data } = this.state;
    console.log(data);
    data = data.map(item => {
      item.mealsList = item.mealsList.filter(
        meal => meal.departmentName === "Bar"
      );
      return item.mealsList.length > 0 ? item : false;
    });
    data = data.filter(arr => arr !== false);
    // data = data.filter(a =>
    //   a.mealsList.some(s => s.departmentName === "Бар")
    // );
    console.log(data);
    return (
      <div className="backgroundCook">
        <div className="wrapperCook">
          {data.map(order => (
              <Order order={order} key={order.orderId}/>
            
          ))}
        </div>
      </div>
    );
  }
}

export default BarmenPage;
