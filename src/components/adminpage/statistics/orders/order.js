import React, { Component } from "react";
import Navigation from "../../../block/navigation.js";
import Search from "../../../block/search.js";
import Footer from "../../../block/footer.js";
import Total from './totals';
import { getData } from "../../../requests";
import NamePage from "../../blocks/namePage";
import TopMeals from "./TopMeals";
import TopWaiter from "./topWaiter";

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[],
      isLoading: false,
      error: null,
      count:0
    };
  }

  async componentDidMount() {
    getData("http://neobiscrmfood.herokuapp.com/api/Admin/waiterOrderTop").then(
      body => {
        this.setState({ data: body });
      }
    );
  }

  render() {
    let {data} = this.state;
    console.log(data);

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
            <NamePage name="Orders Overview"/>
            <Total/>
               <div className="graphicArt"> 
                 Графика
               </div>
               <div className="tops">
                  <TopMeals name="Top Meals"/>
                  <TopWaiter name="Top Waiters"/>
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
