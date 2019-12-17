import React, { Component } from "react";
import { Link } from "react-router-dom";
// import LogOut from "../modalWindow/LogOut";
import "./navigation.css";
import neobisLogo from "./../images/CRM Cafe.svg";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      LogOutModal: false
    };
  }

  render() {
    console.log(this.state.LogOutModal);
    return (
      <nav className="navigationComponent">
        <Link to={"/sales"}>
          {" "}
          <img src={neobisLogo} className="neobis_logo" alt="neobisLogo" />
        </Link>
        <Link to={"/traffic"} className="categories">
          Заказы
        </Link>
        <Link to={"/sales"} className="categories">
          Продажи
        </Link>
        <Link to={"/kitchen"} className="categories">
          Кухня
        </Link>
        <Link to={"/bar"} className="categories">
          Бар
        </Link>
        <Link to={"/transactions"} className="categories">
          История транзакции
        </Link>
        <Link to={"/users"} className="categories">
          Сотрудники
        </Link>
        <Link to={"/category"} className="categories">
          Категории
        </Link>
        <Link to={"/meals"} className="categories">
          Список блюд
        </Link>

        <Link to={"/tables"} className="categories">
          Столы
        </Link>
        <Link to={"/reservations"} className="categories">
          Бронирования
        </Link>
        <div
          className="categories"
          onClick={() => {
            this.setState({ LogOutModal: true });
          }}
        >
          {this.state.LogOutModal ? (
            <div className="modalWrapper">
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
                  onClick={() => this.setState({ LogOutModal: false })}
                >
                  Нет
                </button>
              </div>
            </div>
          ) : null}
          Выйти
        </div>
      </nav>
    );
  }
}

export default Navigation;
