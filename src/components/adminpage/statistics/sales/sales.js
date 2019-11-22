import React, { Component } from "react";
import Navigation from "../../../block/navigation.js";
import Search from "../../../block/search.js";
import Footer from "../../../block/footer.js";
import Total from "./totals";
import NamePage from "./../../blocks/namePage";
import TopMeals from "../blocks/topMeals";
import TopWaiter from "../blocks/topWaiter";
import TopWaiterGraphics from "../graphics/topWaiterSumGraphics";
import "./sales.css";

class Sales extends Component {
  render() {
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
            <NamePage name="Sales Overview" />
            <Total />
            <div className="statistics">
              <div className="graphicArt">Графика</div>

              <TopMeals name="Top Meals" />
              <TopWaiter name="Top Waiters" />
              <TopWaiterGraphics />
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
