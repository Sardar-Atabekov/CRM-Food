import React, { Component } from "react";
import { getData, postData, putData, deleteData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import ModalWindow from "./../../modalWindow/modalWindow";
import "./category.css";
import "./menu.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: [],
      isLoading: false,
      error: null,
      select: 2,
      data: [],
      status: false
    };
    this.changeSelectDepartment = this.changeSelectDepartment.bind(this);
    this.addTableClick = this.addTableClick.bind(this);
    this.changeTableClick = this.changeTableClick.bind(this);
  }

  addTableClick(event) {
    let data = {
      name: event.target.parentNode.firstChild.value,
      imageURL: event.target.parentNode.childNodes[1].value,
      departmentId: event.target.previousSibling.value
    };
    event.target.parentNode.firstChild.value = "";
    event.target.parentNode.childNodes[1].value = "";
    console.log(data);
    if (data.name.length > 2) {
      postData("/Categories/", data).then(res => {
        if (res.status !== "error") {
          this.setState({
            message: "Данные успешно добавлены!",
            status: true
          });
        } else {
          this.setState({
            message: "Ошибка. Проверьте введенные данные",
            status: true
          });
        }
      });
    } else {
      this.setState({
        message: "Ошибка. Проверьте введенные данные",
        status: true
      });
    }
  }

  changeTableClick(event) {
    let id = event.target.getAttribute("id"),
      data = {
        id,
        name: event.target.parentNode.childNodes[1].value,
        department: event.target.previousSibling.value,
        imageURL: event.target.parentNode.firstChild.getAttribute("src")
      };
    // document.getElementById('detailed-form').reset()
    console.log(data);
    console.log(data.name.length);
    if (data.name.length > 2) {
      putData(`/Categories/${id}`, data).then(res => {
        console.log(res);
        if (res.status !== "error" && res.status !== 400) {
          this.setState({
            message: "Данные успешно добавлены!",
            status: true
          });
        } else {
          this.setState({
            message: res.message,
            status: true
          });
        }
      });
    } else {
      this.setState({
        message: "Ошибка. Проверьте введенные данные",
        status: true
      });
    }
  }

  changeSelectDepartment(event) {
    let select = event.target.value;
    console.log(select);
    let arr = this.state.body;

    if (+select === 2) {
      this.setState({ data: arr });
    } else {
      this.setState({
        data: arr.filter(department => department.departmentId === +select)
      });
    }
  }
  async componentDidMount() {
    getData(`${API}/Categories`).then(body => {
      this.setState({ body });
    });
  }

  render() {
    let data = this.state.data.length > 0 ? this.state.data : this.state.body;

    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="categoriesContent">
            <div className="addCategories">
              <input
                type="text"
                className="addCategory"
                placeholder="Названия категории"
              />
              <input
                type="text"
                className="addCategory"
                placeholder="Ссылка изображении"
              />
              <select className="select" name="departmentId">
                <option value="0">Кухня</option>
                <option value="1">Бар</option>
              </select>
              <button onClick={this.addTableClick} className="addCategoryBtn">
                Добавить
              </button>

              <div className="selectDepartment">
                <label htmlFor="department">По департаментам: </label>
                <select
                  className="select"
                  onChange={this.changeSelectDepartment}
                  id="department"
                >
                  <option value="2">Все</option>
                  <option value="0">Кухня</option>
                  <option value="1">Бар</option>
                </select>
              </div>
            </div>
            <div className="listItem">
              {data.map(item => (
                <div className="item" key={item.id}>
                  <img src={item.image} alt={item.category} />
                  <input
                    type="text"
                    className="input"
                    defaultValue={item.category}
                  />
                  <select
                    id="name"
                    className="select"
                    name="name"
                    defaultValue={item.departmentId}
                  >
                    <option value="0">Кухня</option>
                    <option value="1">Бар</option>
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
                      deleteData(`/Categories/${item.id}`);
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
        {this.state.status ? (
          <ModalWindow
            message={this.state.message}
            statusModal={status => this.setState({ status })}
            status={this.state.status}
          />
        ) : null}
      </div>
    );
  }
}

export default Categories;
