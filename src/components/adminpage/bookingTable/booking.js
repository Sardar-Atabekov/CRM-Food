import React, { Component } from "react";
import { getData, postData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "../blocks/namePage";
import calendar from "./../../images/calendar.svg";
import { TodayDate } from "./../calendar/time";
// import { TimeDate } from "../calendar/time";
import ModalWindow from "./../../modalWindow/modalWindow";
import Loading from "../../loading/loading";
import "./bookingTable.css";
class ListArmoredTables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      TodayDate: TodayDate(),
      menQuantity: 2,
      tableId: null
    };
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  async componentDidMount() {
    getData(`${API}/Tables`).then(body => {
      this.setState({ data: body, isLoading: false });
    });
  }

  handleSumbit(event) {
    event.preventDefault();
    let bookTable = this.state,
      target = event.target;
    bookTable.bookDate = this.state.TodayDate;

    if (bookTable.tableId) {
      postData("/Admin/bookTable/", bookTable).then(res => {
        console.log(res);
        if (res.status !== "error" && res.status !== 400) {
          this.setState({
            message: "Стол забронирован!",
            status: true
          });
          target.reset();
        } else {
          this.setState({
            message: res.message ? res.message : "Проверьте данные",
            status: true
          });
        }
      });
    } else {
      this.setState({
        message: "Выберите стол!",
        status: true
      });
    }
  }

  render() {
    let { data, menQuantity, tableId } = this.state;
    console.log(this.state);
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
              <form className="listArmoredTables" onSubmit={this.handleSumbit}>
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
                      <span
                        className="prev"
                        onClick={() => {
                          menQuantity =
                            menQuantity > 1 ? menQuantity - 1 : menQuantity;
                          this.setState({ menQuantity });
                        }}
                      >
                        -
                      </span>
                      <input
                        className="peopleQuantity"
                        type="number"
                        name="menQuantity"
                        value={this.state.menQuantity}
                        disabled
                      />

                      <span
                        className="next"
                        onClick={() => {
                          menQuantity += 1;
                          this.setState({ menQuantity });
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
                  <input
                    className=""
                    placeholder="Имя клиента"
                    required
                    onChange={e =>
                      this.setState({ clientName: e.target.value })
                    }
                  />
                  <input
                    className=""
                    onChange={e =>
                      this.setState({ phoneNumber: e.target.value })
                    }
                    placeholder="+996"
                    required
                    pattern="^\(?\+([9]{2}?[6])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$"
                  />
                </div>
                <div className="btnBooking">
                  <input
                    className="addCategoryBtn"
                    type="submit"
                    value="Забронировать"
                  />{" "}
                </div>
              </form>
            </main>
          )}
          {this.state.status ? (
            <ModalWindow
              message={this.state.message}
              statusModal={() => this.setState({ status: false })}
              status={this.state.status}
            />
          ) : null}
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default ListArmoredTables;
