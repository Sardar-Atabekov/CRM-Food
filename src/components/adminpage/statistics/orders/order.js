import React, { Component } from "react";
import Navigation from "../../../block/navigation.js";
import Search from "../../../block/search.js";
import Footer from "../../../block/footer.js";
import Total from "./totals";
import NamePage from "../../blocks/namePage";
import TopMeals from "./TopMeals";
import TopWaiter from "./topWaiter";

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
          <main className="orderContent">
            <NamePage name="Обзор заказов" />
            <Total />
            <div className="statistics">
              <div className="graphicArt">Графика</div>
              <TopMeals name="Топ блюд" />
              <TopWaiter name="Топ официанты" />
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
