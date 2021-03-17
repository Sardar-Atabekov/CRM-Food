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

class BarPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true
    };
  }

  async componentDidMount() {
    getData(`${API}/Statistic/barSums`).then(body => {
      this.setState({ data: body, isLoading: true });
    });
  }

  render() {
    let { data } = this.state;
    // data =
    //   data &&
    //   data.map(meal => {
    //     meal.sums = meal.price * meal.finishedQuantity;
    //     return meal;
    //   });
    let sum, names;
    console.log(data);
    if (data) {
      data = data.sort((a, b) => b.sum - a.sum);
      sum = [
        ...data.map((item, index) => (index < 8 ? item.sum : false))
      ].filter(a => a >= 0);
      names = [
        ...data.map((item, index) => (index < 8 ? item.name : false))
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
              <NamePage name="Статистика Бара" />
              <TotalSum />
              <TotalBar />
              <div className="statistics">
                <GraphicArt data={sum} names={names} name="Топ напитков" />
                <TopSum name="Топ напитков по выручке" />
                <TopDrinks name="Топ напитков" />
                {/* <TopWaiterDrinks name="Топ официантов по бару" /> */}
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

export default BarPage;
