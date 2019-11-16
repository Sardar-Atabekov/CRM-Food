import React, { Component } from "react";
import './namePage.css';
class NamePage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name };
  }

  render() {
    return (
      <div className="namePage">
        <span className="page-subtitle">DASHBOARD</span>
        <h3 className="page-title">{this.state.name}</h3>
      </div>
    );
  }
}


export default NamePage;
