import React from "react";
import { deleteData } from "./../requests";
import "./modalWindow.css";

export default class ModalWindow extends React.Component {
  render() {
    return (
      <div className="modalWrapper">
        <div className="modalWindow">
          <h2>Вы точно хотите удалить {this.props.message}?</h2>
          <button
            className="yesBtn"
            onClick={() => {
              deleteData(this.props.url);
              console.log(this.props.target.parentNode);
              this.props.target.parentNode.remove();
              this.props.deleteStatus(false);
            }}
          >
            Да
          </button>
          <button
            className="noBtn"
            onClick={() => {
              console.log(this.props.target.parentNode);
              this.props.deleteStatus(false);
            }}
          >
            Нет
          </button>
        </div>
      </div>
    );
  }
}
