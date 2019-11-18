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

  changeTableClick(id, tableName) {
    const data = {
      id: id,
      name: tableName,
      status: 0
    };
    // document.getElementById('detailed-form').reset()
    putData(`/tables/${id}`, data);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async componentDidMount() {
    getData("http://neobiscrmfood.herokuapp.com/api/Tables").then(
      body => {
        this.setState({ data: body });
        console.log(body);
      }
    );
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
          <main className="categoriesContent">
            <div className="addCategories">
              <input type="text" className="addCategory"/>
              <button onClick={this.addTableClick}>Add</button>
            </div>

            {/* {data.map(item => (
              <div className="item" key={item.id}>
                <input
                  type="text"
                  name="currentValue"
                  className="item"
                  defaultValue={item.name}
                  
                  onChange={this.handleChange}
                />
                <img
                  onClick={() =>
                    this.changeTableClick(item.id, this.state.currentValue)
                  }
                  className="changeTable"
                  src="https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_icon-icons.com_69146.png"
                  alt="changeImg"
                />
                <img
                  className="deleteTable"
                  alt="deleteTable"
                  src="https://cdn.dribbble.com/users/2087607/screenshots/5730291/x-delete-round-flat-icon-free-download.png"
                  onClick={event => {
                    deleteData(`/tables/${item.id}`);
                    event.target.parentNode.remove();
                  }}
                />
              </div>
            ))} */}

            <div className="listItem">
              {data.map(item => (
                <div className="item" key={item.id}>
                  <img src="https://images.ua.prom.st/973385600_stoly-i-stulya.jpg" alt={item.category} />
                  <input
                    type="text"
                    className="input"
                    defaultValue={item.name}
                  />
                  <select
                    id="name"
                    className="select"
                    name="name"
                    defaultValue={item.status}
                  >
                    <option value="0">Free</option>
                    <option value="1">Busy</option>
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
      </div>
    );
  }
}

export default Tables;
