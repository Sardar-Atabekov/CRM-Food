import React, { Component } from "react";
import { getData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "../blocks/namePage";
import calendar from "./../../images/calendar.svg";
import { TodayDate } from "./../calendar/time";
// import { TimeDate } from "../calendar/time";
import Loading from "../../loading/loading";
import "./bookingTable.css";
class ListArmoredTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      TodayDate: TodayDate(),
      people: 2,
      tableId: null
    };
  }

  async componentDidMount() {
    getData(`${API}/Tables`).then(body => {
      this.setState({ data: body, isLoading: false });
    });
  }

  render() {
    let { data, people, tableId } = this.state;
    console.log(data, people);
    console.log(tableId);
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
                <NamePage name="Бронирование" />
              </div>
              <form className="listArmoredTables">
                <div className="booking">
                  <div className="bookingItem">
                    <h2 className="bookingTitle">Дата брони</h2>
                    <div className="bookingDate">
                      <input
                        className="bookingDateInput"
                        name="bookDate"
                        defaultValue={this.state.TodayDate}
                      />
                      <img
                        src={calendar}
                        alt="calendar"
                        className="calendarImg"
                      />
                    </div>
                  </div>
                  <div className="bookingItem">
                    <h2 className="bookingTitle">Кол-во человек</h2>
                    <div className="bookingPeople">
                      <div
                        className="prev"
                        onClick={() => {
                          people = people > 1 ? people - 1 : people;
                          this.setState({ people });
                        }}
                      >
                        -
                      </div>
                      <input
                        className="peopleQuantity"
                        type="number"
                        name="menQuantity"
                        value={this.state.people}
                        disabled
                      />

                      <span
                        className="next"
                        onClick={() => {
                          people += 1;
                          this.setState({ people });
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
                <div className="tables">
                  <h2 className="bookingTitle">Свободные столы</h2>
                  <ul className="listTables">
                    {data.map(table => (
                      <li
                        key={table.id}
                        className={
                          table.id === tableId ? "selectTable" : "none"
                        }
                        onClick={() => this.setState({ tableId: table.id })}
                      >
                        {table.id}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="clientInfo">
                  <input className="" placeholder="Имя клиента" />
                  <input
                    className=""
                    placeholder="+996"
                    pattern="^\(?\+([9]{2}?[6])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$"
                  />
                </div>
                <div className="btnBooking">
                  <button className="addCategoryBtn">Забронировать</button>{" "}
                </div>
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
