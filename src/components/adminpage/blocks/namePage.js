import React, { Component } from "react";
import "./namePage.css";
export default class NamePage extends Component {
  render() {
    return (
      <div className="namePage">
        <span className="page-subtitle">DASHBOARD</span>
        <h3 className="page-title">{this.props.name}</h3>
      </div>
    );
  }
}
