import React, { Component } from "react";
import { getData } from "../../../requests";
import "./../blocks/styles.css";
class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    getData("https://neobiscrmfood.herokuapp.com/api/Admin/totalOrders").then(
      body => {
        this.setState({ data: body });
      }
    );
  }
  render() {
    let data = this.state.data;
    console.log(data);
    return (
      <div className="totals">
        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>TOTAL Orders</span>
              <h6 className="totalSum">{data.totalOrders} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Orders Month</span>

              <h6 className="totalSum">{data.totalOrdersMonth} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Orders Week</span>
              <h6 className="totalSum">{data.totalOrdersWeek} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Orders TODAY</span>
              <h6 className="totalSum">{data.totalOrdersToday} </h6>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Total;
