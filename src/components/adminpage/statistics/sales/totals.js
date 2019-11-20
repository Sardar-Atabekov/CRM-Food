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
    getData("https://neobiscrmfood.herokuapp.com/api/Admin/totalSums").then(
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
              <span>TOTAL REVENUE</span>
              <h6 className="totalSum">{data.totalSum} сом</h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>REVENUE Month</span>

              <h6 className="totalSum">{data.totalSumMonth} сом</h6>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>REVENUE Week</span>
              <h6 className="totalSum">{data.totalSumWeek} сом</h6>
            </div>
          </div>
        </div>
   
        <div className="totalContainer"> 
          <div className="total">
            <div className="text-center">
              <span>REVENUE TODAY</span>
              <h6 className="totalSum">{data.totalSumToday} сом</h6>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>REVENUE Average</span>
              <h6 className="totalSum">{data.totalSumAverage} сом</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Total;
