import React, { Component } from "react";
import { getData, postData, putData, deleteData } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import "./tables.css";

class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      currentValue: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  addTableClick(event) {
    let data = {
      name: event.target.parentNode.firstChild.value,
      status: 0
    };
    event.target.parentNode.firstChild.value = "";
    // document.getElementById('detailed-form').reset()
    postData("/tables/", data);
  }

  changeTableClick(event) {
    let target = event.target;
    console.log(target);
    const data = {
      id: target.getAttribute('id'),
      name: target.parentNode.children[1].value,
      status: 0
    };
    // document.getElementById('detailed-form').reset()
    putData(`/tables/${data.id}`, data);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async componentDidMount() {
    getData("https://neobiscrmfood.herokuapp.com/api/Tables").then(body => {
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
              <button className="addCategoryBtn" onClick={this.addTableClick}>Добавить</button>
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
      </div>
    );
  }
}

export default Tables;
