import React, { Component } from "react";
import Navigation from "../../../block/navigation.js";
import Search from "../../../block/search.js";
import Footer from "../../../block/footer.js";
import TotalBar from "./totalDrinks";
import TotalSum from "./totalSum";
import TopSum from "./topSum";
import TopDrinks from "./topDrinks";
import TopWaiterDrinks from "./topWaiterDrinks";
import TopWaiterSum from "./topWaiterSum";
import NamePage from "../../blocks/namePage";

class BarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      count: 0
    };
  }

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
            <NamePage name="Статистика Бара" />
            <TotalSum />
            <TotalBar />
            <div className="statistics">
              <div className="graphicArt">Графика</div>
              <TopSum name="Топ напитки по прибылью" />
              <TopDrinks name="Топ напитки" />
              <TopWaiterDrinks name="Топ официанты по бару" />
              <TopWaiterSum name="Топ официанты по прибылью" />
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

export default BarPage;
