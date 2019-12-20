import React, { Component } from "react";
import Chart from "chart.js";
// import { getData, API } from "../../../requests";
import "./graphics.css";
class Graphics extends Component {
  componentDidMount() {
    const node = this.node;

    // let body = this.state.body && this.state.body.sort((a, b) => b.sum - a.sum),
    //   sum,
    //   names;
    // console.log(body);
    // if (body) {
    //   sum = [...body.map((item, index) => (index < 8 ? item.sum : false))];
    //   names = [
    //     ...body.map((item, index) => (index < 8 ? item.userName : false))
    //   ];
    // }

    // Chart.defaults.global.defaultFontFamily = "Lato";
    // Chart.defaults.global.defaultFontColor = "blue";
    // var speedData = {
    //   labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    //   datasets: [
    //     {
    //       label: "Car Speed",
    //       data: [0, 59, 75, 20, 20, 55, 40]
    //     }
    //   ]
    // };

    // var chartOptions = {
    //   legend: {
    //     display: true,
    //     position: "top",
    //     labels: {
    //       boxWidth: 80,
    //       fontColor: "rgb(60, 180, 100)"
    //     }
    //   }
    // };

    // var lineChart = new Chart(node, {
    //   type: "line",
    //   data: speedData,
    //   options: chartOptions
    // });
    var dataFirst = {
      label: "За текущий месяц",
      data: [0, 59, 75, 20, 20, 55, 40],
      lineTension: 0.3,
      backgroundColor: [
        // "rgb(60, 180, 100)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(195,65,105,1)",
        "rgba(0,123,255,1)"
        // "rgba(255, 159, 64, 0.6)"
      ]
      // Set More Options
    };

    var dataSecond = {
      label: "За прошлый месяц",
      data: [20, 15, 60, 60, 65, 30, 70]
      // Set More Options
      // backgroundColor: [
      //   // "rgba(195,65,105,1)",
      //   // "rgba(54, 162, 235, 0.6)",
      //   // "rgba(0,123,255,1)"
      //   // "rgba(75, 192, 192, 0.6)",
      //   // "rgba(255, 159, 64, 0.6)"
      // ]
    };

    var speedData = {
      labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
      datasets: [dataFirst, dataSecond]
    };

    var lineChart = new Chart(node, {
      type: "line",
      data: speedData
      // options: chartOptions
    });

    console.log(lineChart);
  }
  render() {
    return (
      <div className="graphicArt">
        <canvas ref={node => (this.node = node)}></canvas>
      </div>
    );
  }
}

export default Graphics;
