import React, { Component } from "react";
import Navigation from "../../../block/navigation.js";
import Search from "../../../block/search.js";
import Footer from "../../../block/footer.js";
import { API, getData } from "./../../../requests";
import NamePage from "./../../blocks/namePage";
import TopMeals from "../blocks/topMeals";
import TopWaiter from "../blocks/topWaiter";
import LineCharts from "./../graphics/lineCharts";
// import BarCharts from "./../graphics/barCharts.js";
import Total from "./totals";

// import TopWaiterGraphics from "../graphics/topWaiterSumGraphics";
import "./sales.css";

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectRevenue: true
    };
  }
  async componentDidMount() {
    getData(`${API}/Admin/totalSumsMonth`).then(data => {
      this.setState({ data });
    });
  }
  render() {
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
            <NamePage name="Прибыль" />
            <Total />
            <div className="statistics">
              <div className="selectRevenueBlock">
                <div className="selectRevenue">
                  <span onClick={() => this.setState({ selectRevenue: false })}>
                    За неделю
                  </span>
                  <span onClick={() => this.setState({ selectRevenue: true })}>
                    За месяц
                  </span>
                  <span>За год</span>
                </div>
                {this.state.selectRevenue ? (
                  <LineCharts
                    // data={sum} names={names}
                    name="Прибыль за месяц"
                    type="line"
                  />
                ) : (
                  // <BarCharts />
                )}
              </div>

              <TopMeals name="Топ блюд" />
              <TopWaiter name="Топ официантов" />
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
