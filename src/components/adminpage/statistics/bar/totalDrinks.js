import React, { Component } from "react";
import { getData } from "../../../requests";

class TotalBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    getData(
      "https://neobiscrmfood.herokuapp.com/api/Admin/barTotalMeals"
    ).then(body => {
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
              <span>TOTAL Drinks</span>
              <h6 className="totalSum">{data.totalMeals} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Drinks Month</span>

              <h6 className="totalSum">{data.totalMealsMonth} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Drinks Week</span>
              <h6 className="totalSum">{data.totalMealsWeek} </h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Drinks TODAY</span>
              <h6 className="totalSum">{data.totalMealsToday} </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalBar;
