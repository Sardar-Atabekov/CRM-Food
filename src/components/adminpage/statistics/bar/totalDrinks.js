import React, { Component } from "react";
import { getData, API } from "../../../requests";

class TotalBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Statistic/barTotalMeals`).then(body => {
      this.setState({ data: body });
    });
  }
  render() {
    let data = this.state.data;
    return (
      <div className="totals">
        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Общие заказы</span>
              <h6 className="totalSum">{data && data.totalMeals} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За месяц</span>

              <h6 className="totalSum">{data && data.totalMealsMonth} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За неделю</span>
              <h6 className="totalSum">{data && data.totalMealsWeek} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За сегодня</span>
              <h6 className="totalSum">{data && data.totalMealsToday} </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalBar;
