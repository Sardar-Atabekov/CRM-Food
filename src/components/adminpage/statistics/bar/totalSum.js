import React, { Component } from "react";
import { getData, API } from "../../../requests";

class TotalSum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    getData(`${API}/Admin/barTotalSums`).then(body => {
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
              <span>Общая прибыль</span>
              <h6 className="totalSum">{data && data.totalSum} </h6>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За месяц</span>
              <h6 className="totalSum">{data && data.totalSumMonth} </h6>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За неделю</span>
              <h6 className="totalSum">{data && data.totalSumWeek} </h6>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>За сегодня</span>
              <h6 className="totalSum">{data && data.totalSumDay} </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalSum;
