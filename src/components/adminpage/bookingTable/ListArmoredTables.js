import React, { Component } from "react";
import { getData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "../blocks/namePage";
import { Link } from "react-router-dom";
import calendar from "./../../images/calendar.svg";
import { TodayDate } from "./../calendar/time";
// import { TimeDate } from "../calendar/time";
import Loading from "../../loading/loading";
import "./ListArmoredTables.css";
class ListArmoredTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      TodayDate: TodayDate()
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
    console.log();
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
            <main className="waiterContent bookingTables">
              <div className="functionPage">
                <NamePage name="Список бронированных столов" />
              </div>
              <form className="listArmoredTables">
                <div className="booking">
                  <div className="bookingDate">
                    <input
                      className="bookingDateInput"
                      defaultValue={this.state.TodayDate}
                    />
                    <img
                      src={calendar}
                      alt="calendar"
                      className="calendarImg"
                    />
                  </div>
                  <Link className="bookingTable" to={"/booking"}>
                    Забронировать
                  </Link>
                </div>
                <ul className="listTables"></ul>
              </form>
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
