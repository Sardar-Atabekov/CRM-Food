import React, { Component } from "react";
import Navigation from "../../../block/navigation.js";
import Search from "../../../block/search.js";
import Footer from "../../../block/footer.js";
import TotalBar from "./totalDrinks";
import TotalSum from "./totalSum";
import TopSum from "./topSum";
import TopDrinks from "./topDrinks";
// import TopWaiterDrinks from "./topWaiterDrinks";
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
    getData(`${API}/Statistic/kitchenSums`).then(body => {
      this.setState({ data: body, isLoading: true });
    });
  }
  render() {
    let { data } = this.state;
    data =
      data &&
      data.map(meal => {
        meal.sums = meal.price * meal.finishedQuantity;
        return meal;
      });
    let sum, names;
    console.log("Data", data);
    if (data) {
      data = data.sort((a, b) => b.sums - a.sums);
      sum = [
        ...data.map((item, index) => (index < 11 ? item.sums : null))
      ].filter(a => a);
      names = [
        ...data.map((item, index) => (index < 11 ? item.name : null))
      ].filter(a => a);
    }
    console.log("sum", sum);
    console.log("names", names);
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          {this.state.isLoading && sum ? (
            <main className="orderContent">
              <NamePage name="Кухня" />
              <TotalSum />
              <TotalBar />
              <div className="statistics">
                <GraphicArt
                  data={sum}
                  names={names}
                  name="Топ блюд по выручке "
                />
                <TopSum name="Топ блюд по выручке " />
                <TopDrinks name="Топ блюд" />
                {/* <TopWaiterDrinks name="Топ официантов по заказам" /> */}
                <TopWaiterSum name="Топ официантов по выручке" />
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
