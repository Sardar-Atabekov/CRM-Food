import React, { Component } from "react";
import { getData } from "../../requests";
// import { Link } from "react-router-dom";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "./../blocks/namePage";
import Calendar from "./../calendar/calendar";
import './transaction.css';
const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "orders";

class HistoryTransaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    getData("https://neobiscrmfood.herokuapp.com/api/Admin/transactionHistory").then(body => {
      this.setState({ data: body });
    });
  }

  render() {
    let { data } = this.state;

    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="waiterContent transaction">
            <div className="functionPage">
              <NamePage name="Transaction History"/>
              <Calendar />
            </div>
            <div className="transactionDisplay">
              <label htmlFor="show">Show</label>
              <select id="show">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
              <label htmlFor="show">entries</label>
            </div>
            <table>
              <tbody>
                <tr>
                  <th className="sortingNumber">#</th>
                  <th>Date</th>

                  <th>Waiter</th>
                  <th>Products</th>
                  <th>Status</th>
                  <th>Total</th>
                  
                </tr>
                {data.map(order => (
                  <tr key={order.orderId}>
                    
                    

                    <td>
                      {order.orderId}
                    </td>
                    <td>
                      <time dateTime={order.orderDate}>
                        {new Date().getDate(order.orderDate) +
                          "." +
                          new Date().getMonth(order.orderDate) +
                          "." +
                          new Date().getFullYear(order.orderDate)}
                      </time>
                    </td>

                    <td>{order.waiterName}</td>
                    <td>{order.mealsCount}</td>
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
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default HistoryTransaction;
