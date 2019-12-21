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
      label: "За прошлый неделю",
      data: [4145, 5931, 3424, 4120, 5301, 5315, 3240],
      lineTension: 0.3,
      backgroundColor:
        // "rgb(60, 180, 100)",
        "rgba(195,65,105,1)"
      // "rgba(255, 159, 64, 0.6)",
      // "rgba(195,65,105,1)",
      // "rgba(0,123,255,1)"
      // "rgba(255, 159, 64, 0.6)"
      // Set More Options
    };

    var dataSecond = {
      label: "За текущий неделю",
      data: [2767, 3576, 6021, 5460, 5365, 6230, 4370],
      backgroundColor: "rgba(0,123,255,1)"

      // backgroundColor: [
      //   "rgba(0,123,255,1)",
      //   "rgba(54, 162, 235, 0.6)",
      //   "rgba(75, 192, 192, 0.6)",
      //   "rgba(255, 159, 64, 0.6)"
      // ]
    };

    var speedData = {
      labels: [
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
        "Воскресенье"
      ],
      datasets: [dataFirst, dataSecond]
    };

    var lineChart = new Chart(node, {
      type: "bar",
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
// import React, { Component } from "react";
// import { getData, API } from "../../../requests";
// import "./../blocks/styles.css";

// const incomeImg =
//     "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTdjNjcxIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTcgMTRsNS01IDUgNXoiLz4gPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiA8L3N2Zz4=",
//   decreasedImg =
//     "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYzQxODNjIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==";
// class Total extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//     };
//   }

//   async componentDidMount() {
//     getData(`${API}/Admin/totalSums`).then(body => {
//       this.setState({ data: body });
//     });
//   }

//   percent(lastData, data) {
//     lastData = 8000;
//     data = 4566;
//     let percent;
//     percent = (data / lastData) * 100;
//     console.log(percent);
//     percent = percent > 100 ? percent - 100 : percent;
//     console.log(percent);
//     console.log(lastData, data);

//     return (
//       <div className="percentBlock">
//         <img
//           src={data > lastData ? incomeImg : decreasedImg}
//           alt="incomeImg"
//           className="incomeImg"
//         />
//         <span>{(percent - 0).toFixed(2)}%</span>
//       </div>
//     );
//   }

//   render() {
//     let data = this.state.data;
//     console.log(data);
//     return (
//       <div className="totals">
//         <div className="totalContainer">
//           <div className="total">
//             <div className="text-center">
//               <div>
//                 <span>ОБЩАЯ ПРИБЫЛЬ</span>
//                 <h6 className="totalSum">{data && data.totalSum} сом</h6>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="totalContainer">
//           <div className="total">
//             <div className="text-center">
//               <div>
//                 <span>ЗА МЕСЯЦ</span>
//                 <h6 className="totalSum">{data && data.totalSumMonth} сом</h6>
//               </div>
//               {this.percent(data.totalSumLastMonth, data.totalSumMonth)}
//             </div>
//           </div>
//         </div>

//         <div className="totalContainer">
//           <div className="total">
//             <div className="text-center">
//               <div>
//                 <span>ЗА НЕДЕЛЮ</span>
//                 <h6 className="totalSum">{data && data.totalSumWeek} сом</h6>
//               </div>
//               {this.percent(data.totalSumLastWeek, data.totalSumWeek)}
//             </div>
//           </div>
//         </div>

//         <div className="totalContainer">
//           <div className="total">
//             <div className="text-center">
//               {this.percent(data.totalSumLastDay, data.totalSumToday)}
//               <span>За сегодня</span>

//               <h6 className="totalSum">{data && data.totalSumToday} сом</h6>
//             </div>
//           </div>
//         </div>
//         <div className="totalContainer">
//           <div className="total">
//             <div className="text-center">
//               <span>Средная прибыль</span>
//               <h6 className="totalSum">
//                 {data && data.totalSumAverage
//                   ? data.totalSumAverage.toFixed(2)
//                   : null}{" "}
//                 сом
//               </h6>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Total;
