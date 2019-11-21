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


class KitchenPage extends Component {

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
            <NamePage name="Kitchen Stats" />
            <TotalSum />
             <TotalBar />
            <div className="statistics">
              <div className="graphicArt">Графика</div>
              <TopSum name ="Top Meals Revenue "/>
              <TopDrinks name="Top Meals" />
              <TopWaiterDrinks name="Top Waiters Meals" />
              <TopWaiterSum name="Top Waiters Revenue" />
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

export default KitchenPage;
