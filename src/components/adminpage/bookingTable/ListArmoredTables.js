import React, { Component } from "react";
import { getData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "../blocks/namePage";
import DeleteModal from "./../../modalWindow/deleteModal";
import { Link } from "react-router-dom";
import calendar from "./../../images/calendar.svg";
import { TodayDate, TimeHours } from "./../calendar/time";
import Loading from "../../loading/loading";
import "./ListArmoredTables.css";
import moment from "moment";
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
    getData(
      `${API}/Statistic/getBooksDay?&data=${moment().format("YYYY-MM-DD")}`
    ).then(body => {
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
            <main className="waiterContent bookingTables">
              <div className="functionPage">
                <NamePage name="Список бронированных столов" />
              </div>
              <div className="listArmoredTables">
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
                <ul className="listTables">
                  {data.map(booking => (
                    <div key={booking.id} className="bookingsTable">
                      <li>{booking.tableId}</li>
                      <div className="clientInfo">
                        <div className="firstRow">
                          <input defaultValue={booking.clientName} readOnly />
                          <span>Кол-во человек </span>
                          <span>Время</span>
                        </div>
                        <div className="secondRow">
                          <input defaultValue={booking.phoneNumber} readOnly />
                          <input
                            defaultValue={booking.menQuantity}
                            readOnly
                            className="readOnly"
                          />
                          <input
                            defaultValue={TimeHours(booking.bookDate)}
                            readOnly
                            className="readOnly"
                          />
                          <input
                            type="button"
                            value="Снять бронь"
                            className="deleteBtn"
                            onClick={event => {
                              this.setState({
                                deleteModal: true,
                                id: booking.id
                              });
                              this.setState({
                                target: event.target.parentNode.parentNode
                              });
                            }}
                          />
                          {this.state.deleteModal ? (
                            <DeleteModal
                              message={"снять бронь"}
                              target={this.state.target}
                              deleteStatus={() => {
                                this.setState({ deleteModal: false });
                              }}
                              url={`/admin/deleteBook/${this.state.id}`}
                            />
                          ) : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
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
