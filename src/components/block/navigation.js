import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import neobisLogo from "./../images/Logo.svg";
// const neobisLogo = "https://neobis.kg/static/media/Logo.4fff10de.svg";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  render() {
    return (
      <nav className="navigationComponent">
        <Link to={"/admin"}>
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
        <Link
          to={"/"}
          className="categories"
          onClick={e => {
            e.preventDefault();
            localStorage.removeItem("token");
            console.log(this.props);
            window.location.href = "/";
          }}
        >
          Выйти
        </Link>
      </nav>
    );
  }
}

export default Navigation;
