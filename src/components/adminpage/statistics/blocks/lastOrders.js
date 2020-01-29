import React, { Component } from "react";
import { getData, API } from "../../../requests";
import { TimeDate } from "./../../calendar/time";
import MoreModal from "./../../../modalWindow/moreInfoModal";
import "./styles.css";

class LastOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(`${API}/Statistic/${this.props.url}`).then(data => {
      this.setState({ data });
    });
  }
  render() {
    let { data } = this.state;
    console.log(data);
    return (
      <div className="topMeals lastOrders">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Время</th>
              <th>Официант</th>
              <th>Блюда</th>
              <th>Итого</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(order => (
                <tr key={order.orderId}>
                  <td className="text-center">{order.orderId}</td>
                  <td className="text-center">{TimeDate(order.orderDate)}</td>
                  <td className="text-center">{order.waiterName}</td>
                  <td className="text-center">
                    {this.state.moreModal ? (
                      <MoreModal
                        id={this.state.id}
                        meals={this.state.meals}
                        setStatus={() => this.setState({ moreModal: false })}
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
                  <td className="text-center">{order.totalPrice} сом</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LastOrders;
