import React, { Component } from "react";
import { getData, postData, putData, deleteData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import ModalWindow from "./../../modalWindow/modalWindow";
import "./tables.css";

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      currentValue: "",
      modalStatus: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTableClick = this.addTableClick.bind(this);
    this.changeTableClick = this.changeTableClick.bind(this);
  }

  addTableClick(event) {
    let data = {
      name: event.target.parentNode.firstChild.value,
      status: 0
    };
    event.target.parentNode.firstChild.value = "";
    // document.getElementById('detailed-form').reset()
    postData("/tables/", data).then(res => {
      console.log(res);
      if (res.status !== "error" && res.status !== 400) {
        this.setState({
          message: "Данные успешно изменены!",
          modalStatus: true
        });
      } else {
        this.setState({
          message: "Ошибка. Проверьте введенные данные",
          modalStatus: true
        });
      }
    });
  }

  changeTableClick(event) {
    let target = event.target;
    console.log(target);
    const data = {
      id: target.getAttribute("id"),
      name: target.parentNode.children[1].value,
      status: 0
    };
    // document.getElementById('detailed-form').reset()
    putData(`/tables/${data.id}`, data).then(res => {
      console.log(res);
      if (res.status !== "error" && res.status !== 400) {
        this.setState({
          message: "Данные успешно изменены!",
          modalStatus: true
        });
      } else {
        this.setState({
          message: res.message,
          modalStatus: true
        });
      }
    });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async componentDidMount() {
    getData(`${API}/Tables`).then(body => {
      this.setState({ data: body });
      console.log(body);
    });
  }

  render() {
    let { data } = this.state;

    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="categoriesContent tablesContent">
            <div className="addCategories">
              <input type="text" className="addCategory" />
              <button className="addCategoryBtn" onClick={this.addTableClick}>
                Добавить
              </button>
            </div>

            <div className="listItem">
              {data.map(item => (
                <div className="item" key={item.id}>
                  <img
                    src="https://images.ua.prom.st/973385600_stoly-i-stulya.jpg"
                    alt={item.category}
                  />
                  <input
                    type="text"
                    className="input"
                    defaultValue={item.name}
                  />
                  <select
                    id="name"
                    className="select tableSelect"
                    name="name"
                    defaultValue={item.status}
                  >
                    <option value={item.status}>{item.status}</option>
                  </select>
                  <input
                    type="button"
                    id={item.id}
                    className="changeBtn"
                    onClick={this.changeTableClick}
                    value="Изменить"
                  />
                  <input
                    type="button"
                    className="deleteBtn"
                    value="Удалить"
                    onClick={event => {
                      deleteData(`/tables/${item.id}`);
                      event.target.parentNode.remove();
                    }}
                  />
                </div>
              ))}
            </div>
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
        {this.state.modalStatus ? (
          <ModalWindow
            message={this.state.message}
            statusModal={modalStatus => this.setState({ modalStatus })}
            status={this.state.status}
          />
        ) : null}
      </div>
    );
  }
}

export default Tables;
