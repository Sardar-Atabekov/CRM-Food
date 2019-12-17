import React, { Component } from "react";
import Chart from "chart.js";
import { getData, API } from "../../../requests";
import "./graphics.css";

class TopWaiterGraphics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.data
    };
    console.log(this.props.data);
  }
  componentDidMount() {
    const node = this.node;

    getData(`${API}/Admin/waiterSumTop`).then(() => {
      let body =
          this.state.body && this.state.body.sort((a, b) => b.sum - a.sum),
        sum,
        names;
        console.log(body);
      if (body) {
        sum = [...body.map((item, index) => (index < 8 ? item.sum : false))];
        names = [
          ...body.map((item, index) => (index < 8 ? item.userName : false))
        ];
      }

      Chart.defaults.global.defaultFontFamily = "Lato";
      Chart.defaults.global.defaultFontColor = "blue";
      let myChart = new Chart(node, {
        type: "bar",
        data: {
          labels: names,
          datasets: [
            {
              label: "Top Waiter Sum",
              data: sum,
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
    });
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
