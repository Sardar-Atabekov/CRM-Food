import React, { Component } from "react";
import { getData, API } from "../../../requests";
import "./../blocks/styles.css";

const incomeImg =
    "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMTdjNjcxIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gPHBhdGggZD0iTTcgMTRsNS01IDUgNXoiLz4gPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiA8L3N2Zz4=",
  decreasedImg =
    "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjYzQxODNjIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTcgMTBsNSA1IDUtNXoiLz4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==";
class Total extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`${API}/Statistic/totalSums`).then(body => {
      this.setState({ data: body });
    });
  }

  percent(lastData, data) {
    lastData = 8000;
    data = 4566;
    let percent;
    percent = (data / lastData) * 100;
    console.log(percent);
    percent = percent > 100 ? percent - 100 : percent;
    console.log(percent);
    console.log(lastData, data);

    return (
      <div className="percentBlock">
        <img
          src={data > lastData ? incomeImg : decreasedImg}
          alt="incomeImg"
          className="incomeImg"
        />
        <span>{(percent - 0).toFixed(2)}%</span>
      </div>
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
              <div>
                <span>ОБЩАЯ ПРИБЫЛЬ</span>
                <h6 className="totalSum">{data && data.totalSum} сом</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <div>
                <span>ЗА МЕСЯЦ</span>
                <h6 className="totalSum">{data && data.totalSumMonth} сом</h6>
              </div>
              {/* {this.percent(data.totalSumLastMonth, data.totalSumMonth)} */}
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <div>
                <span>ЗА НЕДЕЛЮ</span>
                <h6 className="totalSum">{data && data.totalSumWeek} сом</h6>
              </div>
              {/* {this.percent(data.totalSumLastWeek, data.totalSumWeek)} */}
            </div>
          </div>
        </div>

        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              {/* {this.percent(data.totalSumLastDay, data.totalSumToday)} */}
              <span>За сегодня</span>

              <h6 className="totalSum">{data && data.totalSumToday} сом</h6>
            </div>
          </div>
        </div>
        <div className="totalContainer">
          <div className="total">
            <div className="text-center">
              <span>Средная прибыль</span>
              <h6 className="totalSum">
                {data && data.totalSumAverage
                  ? data.totalSumAverage.toFixed(2)
                  : null}{" "}
                сом
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Total;
