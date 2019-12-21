import React from "react";

export default class ModalWindow extends React.Component {
  render() {
    return (
      <div className="modalWrapper LogOut">
        <div className="modalWindow">
          <h2>Вы точно хотите выйти?</h2>
          <button
            className="yesBtn"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Да
          </button>
          <button
            className="noBtn"
            onClick={() => {
              this.props.logOutStatus(false);
            }}
          >
            Нет
          </button>
        </div>
      </div>
    );
  }
}
