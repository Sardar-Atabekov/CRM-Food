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
import GraphicArt from "./../graphics/graphics";
import { API, getData } from "./../../../requests";
import Loading from "../../../loading/loading.js";
class KitchenPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false
    };
  }

  async componentDidMount() {
    getData(`${API}/Admin/kitchenSumStatistics`).then(body => {
      this.setState({ data: body, isLoading: true });
    });
  }
  render() {
    let { data } = this.state;
    data =
      data &&
      data.map(meal => {
        meal.sum = meal.price * meal.quantity;
        return meal;
      });
    let sum, names;
    console.log(data);
    if (data) {
      data = data.sort((a, b) => b.sum - a.sum);
      sum = [...data.map((item, index) => (index < 8 ? item.sum : false))];
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
              <NamePage name="Кухня" />
              <TotalSum />
              <TotalBar />
              <div className="statistics">
                <GraphicArt data={sum} names={names} name="Топ блюды" />
                <TopSum name="Топ блюди по прибылью " />
                <TopDrinks name="Топ блюди" />
                <TopWaiterDrinks name="Топ официанты по заказам" />
                <TopWaiterSum name="Топ официанты по прибылью" />
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

export default KitchenPage;
