import React, { Component } from "react";
import { Link } from "react-router-dom";
import LogOut from "../modalWindow/LogOut";
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
          <img src={neobisLogo} className="neobis_logo" alt="neobisLogo" />
        </Link>
        <Link to={"/traffic"} className="categories">
          Заказы
        </Link>
        <Link to={"/sales"} className="categories">
          Выручка
        </Link>
        <Link to={"/kitchen"} className="categories">
          Кухня
        </Link>
        <Link to={"/bar"} className="categories">
          Бар
        </Link>
        <Link to={"/transactions"} className="categories">
          История транзакций
        </Link>
        <Link to={"/users"} className="categories">
          Сотрудники
        </Link>
        <Link to={"/category"} className="categories">
          Категории
        </Link>
        <Link to={"/meals"} className="categories">
          Блюда и напитки
        </Link>

        <Link to={"/tables"} className="categories">
          Столы
        </Link>
        <Link to={"/reservations"} className="categories">
          Бронирование
        </Link>
        <div
          className="categories"
          onClick={() => {
            this.setState({ LogOutModal: true });
          }}
        >
          Выйти
        </div>
        {this.state.LogOutModal ? (
          <LogOut logOutStatus={() => this.setState({ LogOutModal: false })} />
        ) : null}
      </nav>
    );
  }
}

export default Navigation;
