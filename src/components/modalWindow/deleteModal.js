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
            onClick={event => {
              deleteData(this.props.url);
              event.target.parentNode.parentNode.parentNode.parentNode.remove();
              this.props.deleteStatus(false);
            }}
          >
            Да
          </button>
          <button
            className="noBtn"
            onClick={event => {
              console.log(event.target.parentNode.parentNode.parentNode);
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
