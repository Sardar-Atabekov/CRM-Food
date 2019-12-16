import React, { Component } from "react";
import { getData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "../blocks/namePage";
// import { TimeDate } from "../calendar/time";
import Loading from "../../loading/loading";

class ListArmoredTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null
    };
  }

  async componentDidMount() {
    getData(`${API}/Admin/getBooks`).then(body => {
      this.setState({ data: body, isLoading: false });
    });
  }

  render() {
    let { data } = this.state;
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
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <main className="waiterContent transaction">
              <div className="functionPage">
                <NamePage name="Список бронированных столов" />
              </div>
            </main>
          )}

          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default ListArmoredTables;
