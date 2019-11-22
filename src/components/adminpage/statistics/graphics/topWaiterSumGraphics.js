import React, { Component } from "react";
import Chart from "chart.js";
import { getData } from "../../../requests";
import "./graphics.css";

class TopWaiterGraphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sum: [],
      names: []
    };
  }
  componentDidMount() {
    const node = this.node;

    getData("https://neobiscrmfood.herokuapp.com/api/Admin/waiterSumTop").then(
      body => {
        body= body.sort((a,b)=>b.sum-a.sum);
        let sum =  [...body.map((item, index) => 
            index<8?item.sum:false
        )];
        console.log(body);
        Chart.defaults.global.defaultFontFamily = "Lato";
        Chart.defaults.global.defaultFontColor = "blue";
        let myChart = new Chart(node, {
          type: "bar",
          data: {
            labels:[...body.map(item => item.userName)],
            datasets: [
              {
                label: "Top Waiter Sum",
                data:sum,
                backgroundColor: [
                  "rgb(60, 180, 100)",
                  "rgba(54, 162, 235, 0.6)",
                  "rgba(255, 206, 86, 0.6)",
                  "rgba(75, 192, 192, 0.6)",
                  "rgba(255, 159, 64, 0.6)"
                ]
              }
            ]
          },
          options: {
            responsive: false,
            legend: {
              display: true,
              position: "top",
              labels: {
                boxWidth: 80,
                fontColor: "rgb(60, 180, 100)",
                backgroundColor: "#e4e4e4"
              }
            },
            tooltips: {
              cornerRadius: 0,
              caretSize: 0,
              xPadding: 16,
              yPadding: 10,
              backgroundColor: "#ffffff",
              titleFontStyle: "normal",
              titleMarginBottom: 15,
              titleFontColor: "black",
              bodyFontColor: "black"
            }
          }
        });

        console.log(myChart);
      }
    );
  }

  render() {
    return (
      <div className="topWaiterGraphics">
        <canvas ref={node => (this.node = node)}></canvas>
      </div>
    );
  }
}

export default TopWaiterGraphics;
