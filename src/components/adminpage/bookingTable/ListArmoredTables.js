import React, { Component } from "react";
import { getData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "../blocks/namePage";
import DeleteModal from "./../../modalWindow/deleteModal";
import { Link } from "react-router-dom";
import calendar from "./../../images/calendar.svg";
import DatePicker from "react-datepicker";
import { TimeHours, TimeFormat } from "./../calendar/time";
import Loading from "../../loading/loading";
import "./ListArmoredTables.css";
class ListArmoredTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      bookDate: new Date()
    };
  }
  async componentDidMount() {
    console.log(this.state.bookDate);
    getData(
      `${API}/admin/getBooks`
    ).then(data => {
      this.setState({ data, isLoading: false });
    });
  }

  componentDidUpdate(prevState) {
    console.log("prev", prevState);
    // if (prevState.bookDate !== this.state.bookDate) {
    //   this.componentDidMount();
    // }
  }
  render() {
    let { data, bookDate } = this.state;
    console.log(data);
    console.log(TimeFormat(this.state.bookDate));
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
                    {/* <input
                      className="bookingDateInput"
                      defaultValue={this.state.TodayDate}
                    /> */}
                    <DatePicker
                      selected={bookDate}
                      className="bookingDateInput"
                      onChange={date => this.setState({ bookDate: date })}
                      // showTimeSelect
                      // timeFormat="HH:mm"
                      // timeIntervals={15}
                      // timeCaption="Время"
                      locale="ru"
                      dateFormat=" d MMMM"
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
