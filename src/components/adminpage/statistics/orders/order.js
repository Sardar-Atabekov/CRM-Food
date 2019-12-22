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
      bar: [],
      kitchen: [],
      kitchenLoading: false,
      barLoading: false
    };
  }
  async componentDidMount() {
    getData(`${API}/Admin/topMeals`).then(body => {
      this.setState({ kitchen: body, kitchenLoading: true });
    });
    getData(`${API}/Admin/topDrinks`).then(body => {
      this.setState({ bar: body, barLoading: true });
    });
  }
  render() {
    let { bar, kitchen } = this.state,
      data = [...bar, ...kitchen].sort((a, b) => b.count - a.count);

    let sum, names;
    if (data) {
      data = data.sort((a, b) => b.count - a.count);
      sum = [...data.map((item, index) => (index < 15 ? item.count : false))];
      names = [...data.map((item, index) => (index < 15 ? item.name : false))];
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
          {this.state.barLoading && this.state.kitchenLoading ? (
            <main className="orderContent">
              <NamePage name="Обзор заказов" />
              <Total />
              <div className="statistics">
                <GraphicArt data={sum} names={names} name="Топ блюд" />
                <TopMeals name="Топ блюд" />
                <TopWaiter name="Топ официантов" />
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
