import React, { Component } from "react";
import './namePage.css';
class NamePage extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.name };
  }

  render() {
    return (
      <div className="namePage">
        <span className="page-subtitle">DASHBOARD</span>
        <h3 className="page-title">Transaction History</h3>
      </div>
    );
  }
}


export default NamePage;
