import React, { Component } from "react";
import Navigation from "../../../block/navigation.js";
import Search from "../../../block/search.js";
import Footer from "../../../block/footer.js";
import Total from "./totals";
import NamePage from "../../blocks/namePage";
import TopMeals from "./TopMeals";
import TopWaiter from "./topWaiter";
import { API, getData } from "./../../../requests";
import Loading from "../../../loading/loading.js";
import GraphicArt from "./../graphics/graphics";
class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      graphics: false,
      isLoading: false
    };
  }

  async componentDidMount() {
    getData(`${API}/Admin/waiterOrderTop`).then(body => {
      this.setState({ data: body });
    });
  }
  render() {
    let { data } = this.state;

    let sum, names;
    if (data) {
      data = data.sort((a, b) => b.orderCount - a.orderCount);
      sum = [
        ...data.map((item, index) => (index < 8 ? item.orderCount : false))
      ];
      names = [...data.map((item, index) => (index < 8 ? item.name : false))];
    }
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          {this.state.isLoading ? (
            <main className="orderContent">
              <NamePage name="Обзор заказов" />
              <Total />
              <div className="statistics">
                <GraphicArt data={sum} names={names} name="Топ официанты" />
                <TopMeals name="Топ блюд" />
                <TopWaiter name="Топ официанты" />
              </div>
            </main>
          ) : (
            <Loading />
          )}

          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default Sales;
