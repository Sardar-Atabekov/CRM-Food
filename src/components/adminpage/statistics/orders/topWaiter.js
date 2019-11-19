import React, { Component } from "react";
import { getData } from "../../../requests";
import "./../blocks/styles.css";


class TopWaiter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    getData(
      "https://neobiscrmfood.herokuapp.com/api/Admin/waiterOrderTop"
    ).then(body => {
      this.setState({ data: body });
    });
   
  }
  render() {
    let { data } = this.state;
      
    return (
      <div className="topMeals">
        <div className="header">
          <h4>{this.props.name}</h4>
        </div>
        <ul className="meals">
          {data.map((user, index) =>
            index < 8 ? (
              <li>
                <span>{user.name}</span> <span  className="sums">{user.orderCount}</span>
              </li>
            ) : (
              false
            )
          )}
        </ul>
      </div>
    );
  }
}

export default TopWaiter;
