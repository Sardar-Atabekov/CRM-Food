import React from "react";
import OK from "./../images/checked.svg";
import "./modalWindow.css";

export default class ModalWindow extends React.Component {
  render() {
    setTimeout(() => this.props.statusModal(false), 1500);
    return (
      <div className="modalWrapper">
        <div className="modalWindow">
          <h2>{this.props.message}</h2>
          <img
            src={OK}
            alt={"Ok"}
            onClick={() => this.props.statusModal(false)}
          />
        </div>
      </div>
    );
  }
}
