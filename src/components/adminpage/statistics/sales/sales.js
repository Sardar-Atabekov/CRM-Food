import React, { Component } from "react";
import Navigation from "../../../block/navigation.js";
import Search from "../../../block/search.js";
import Footer from "../../../block/footer.js";
import { API, getData } from "./../../../requests";
import NamePage from "./../../blocks/namePage";
import TopMeals from "../blocks/topMeals";
import TopWaiter from "../blocks/topWaiter";
import LastFinishedOrders from "../blocks/lastOrders";
import LineCharts from "./../graphics/lineCharts";
import BarCharts from "./../graphics/barCharts.js";
import Graphics from "./../graphics/graphics";
import DatePicker from "react-datepicker";
// import Time from "./../../calendar/time";
import Total from "./totals";
import "./sales.css";

// import TopWaiterGraphics from "../graphics/topWaiterSumGraphics";
class Sales extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      startDate: new Date("2019/02/01"),
      endDate: new Date("2019/02/10"),
      selectRevenue: "day"
    };
  }
  async componentDidMount() {
    this._isMounted = true;
    if (this._isMounted) {
      this.setState({ isLoading: false });
      getData(`${API}/Statistic/totalSumsMonth`).then(data => {
        this.setState({ data });
      });
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let { startDate, endDate, selectRevenue } = this.state;
    console.log(this.state);
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="salesContent">
            <NamePage name="Выручка" />
            <Total />
            <div className="statistics">
              <div className="selectRevenueBlock">
                <div className="selectRevenueBlock-header">
                  <h4 className="m-0">Отчет о выручке</h4>
                  <div className="block-handle"></div>
                </div>
                <div className="salesDateBlock">
                  <div className="selectRevenue">
                    <span
                      className={
                        selectRevenue === "day"
                          ? "paginationActiveButton"
                          : null
                      }
                      onClick={() => this.setState({ selectRevenue: "day" })}
                    >
                      По дням
                    </span>
                    <span
                      className={
                        selectRevenue === "week"
                          ? "paginationActiveButton"
                          : null
                      }
                      onClick={() => this.setState({ selectRevenue: "week" })}
                    >
                      По неделям
                    </span>
                    <span
                      className={
                        selectRevenue === "month"
                          ? "paginationActiveButton"
                          : null
                      }
                      onClick={() => this.setState({ selectRevenue: "month" })}
                    >
                      По месяцам
                    </span>
                  </div>
                  <div className="form-group">
                    <DatePicker
                      selected={startDate}
                      onChange={date => this.setState({ startDate: date })}
                      locale="ru"
                      selectsStart
                      className="form-control"
                      startDate={startDate}
                      endDate={endDate}
                    />
                    <DatePicker
                      className="form-control"
                      selected={endDate}
                      onChange={date => this.setState({ endDate: date })}
                      selectsEnd
                      locale="ru"
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                    />
                  </div>
                </div>

                {this.state.selectRevenue === "day" ? (
                  <BarCharts />
                ) : this.state.selectRevenue === "week" ? ( // <BarCharts />
                  <LineCharts
                    // data={sum} names={names}
                    name="Выручка по месяцам"
                    type="line"
                  />
                ) : this.state.selectRevenue === "month" ? (
                  <Graphics
                    // data={sum} names={names}
                    names={[
                      "Январь",
                      "Февраль",
                      "Март",
                      "Апрель",
                      "Май",
                      "Июнь",
                      "Июль",
                      "Август",
                      "Сентябрь",
                      "Октябрь",
                      "Ноябрь",
                      "Декабрь"
                    ]}
                    name="Выручка по месяцам"
                    type="line"
                    data={[
                      254543,
                      252853,
                      254534,
                      258535,
                      253852,
                      254434,
                      253523,
                      253921,
                      255453,
                      254023,
                      253535,
                      254321
                    ]}
                  />
                ) : null}
              </div>

              <TopMeals name="Топ блюд" />
              <TopWaiter name="Топ официантов" />
              <LastFinishedOrders
                name="Последние завершенные заказы"
                url="lastFinishedOrders"
              />
              {/* <TopWaiterGraphics /> */}
            </div>
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default Sales;
