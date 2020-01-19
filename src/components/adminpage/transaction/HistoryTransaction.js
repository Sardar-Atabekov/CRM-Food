import React, { Component } from "react";
import { getData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "./../blocks/namePage";
import Calendar from "./../calendar/calendar";
import { TimeDate } from "./../calendar/time";
import Loading from "../../loading/loading";
import MoreModal from "./../../modalWindow/moreInfoModal";
import "./transaction.css";
class HistoryTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      moreModal: false,
      id: "",
      meals: ""
    };
  }

  async componentDidMount() {
    getData(`${API}/Statistic/transactionHistory`).then(body => {
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
                <NamePage name="История транзакции" />
                <Calendar />
              </div>
              {/* <div className="transactionDisplay">
                <label htmlFor="show">Show</label>
                <select id="show">
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <label htmlFor="show">entries</label>
              </div> */}
              <table>
                <tbody>
                  <tr>
                    <th className="sortingNumber">#</th>
                    <th>Время</th>
                    <th>Официант</th>
                    <th>Блюда</th>
                    <th>Статус</th>
                    <th>Итого</th>
                  </tr>
                  {data.map(order => (
                    <tr key={order.orderId}>
                      <td>{order.orderId}</td>
                      <td>
                        <time dateTime={order.orderDate}>
                          {TimeDate(order.orderDate)}
                        </time>
                      </td>

                      <td>{order.waiterName}</td>
                      <td>
                        {this.state.moreModal ? (
                          <MoreModal
                            id={this.state.id}
                            meals={this.state.meals}
                            setStatus={() =>
                              this.setState({ moreModal: false })
                            }
                          />
                        ) : (
                          <span
                            onClick={() => {
                              this.setState({ moreModal: true });
                              this.setState({ id: order.orderId });
                              this.setState({ meals: order.mealOrders });
                            }}
                            className="moreMeals"
                          >
                            Посмотреть
                          </span>
                        )}
                      </td>
                      <td>{order.status}</td>
                      <td>{order.totalPrice} сом</td>
                      {/* <td className="operationBlock">
                       <div className="operation">
                        <Link to={{ pathname: `/order/${order.id}/` }}>
                          Изменить{" "}
                        </Link>
                        <button
                          onClick={event => {
                            deleteData(`/orders/${order.id}`);
                            event.target.parentNode.parentNode.parentNode.remove();
                          }}
                        >
                          Удалить{" "}
                        </button>
                      </div>
                    </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default HistoryTransaction;
