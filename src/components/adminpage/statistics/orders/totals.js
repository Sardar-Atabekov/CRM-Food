import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./../blocks/styles.css";
class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Statistic/totalOrders`).then(body => {
      this.setState({ data: body });
    });
  }
  render() {
    let data = this.state.data;
    console.log(data);
    return (
      <div className="totals">
        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Общие заказы</span>
              <h6 className="totalSum">{data && data.totalOrders} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За месяц</span>

              <h6 className="totalSum">{data && data.totalOrdersMonth} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За неделю</span>
              <h6 className="totalSum">{data && data.totalOrdersWeek} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За сегодня</span>
              <h6 className="totalSum">{data && data.totalOrdersToday} </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Total;
