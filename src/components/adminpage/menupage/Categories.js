import React, { Component } from "react";
import { getData, postData, putData, deleteData } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import "./menu.css";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  addTableClick(event) {
    let data = {
      name: event.target.parentNode.firstChild.value,
      departmentId: event.target.previousSibling.value
    };
    event.target.parentNode.firstChild.value = "";
    // document.getElementById('detailed-form').reset()
    console.log(data);
    postData("/Categories/", data);
  }

  changeTableClick(event) {
    let id = event.target.getAttribute("id"),
      data = {
        id:id,
        name: event.target.parentNode.firstChild.value,
        departmentId: event.target.getAttribute("department")
      };
    // document.getElementById('detailed-form').reset()
    console.log(data, id);
    putData(`/Categories/${id}`, data);
  }

  async componentDidMount() {
    getData("https://neobiscrmfood.herokuapp.com/api/Categories").then(body => {
      this.setState({ data: body });
    });
  }

  render() {
    let { data } = this.state;
    // barDepartment = data.filter(department=>department.departmentName==="Бар"),
    // cookDepartment = data.filter(department=>department.departmentName==="Кухня");

    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="tableContent">
            <div className="addTable">
              <input type="text" />
              <select  className='select' name="departmentId">
                  <option value="0" >Кухня</option>
                  <option value="1" >Бар</option>
                                      
              </select>
              <button onClick={this.addTableClick}>Add</button>
            </div>

            {data.map(item => (
              <div className="item" key={item.id}>
                <input
                  type="text"
                  className="item"
                  defaultValue={item.category}
                />
                <img
                  id={item.id}
                  department={item.departmentId}
                  src="https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_icon-icons.com_69146.png"
                  className="changeTable"
                  onClick={this.changeTableClick}
                  alt="changeImg"
                />
                <img
                  className="deleteTable"
                  alt="deleteTable"
                  src="https://cdn.dribbble.com/users/2087607/screenshots/5730291/x-delete-round-flat-icon-free-download.png"
                  onClick={event => {
                    deleteData(`/Categories/${item.id}`);
                    event.target.parentNode.remove();
                  }}
                />
              </div>
            ))}
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default Categories;
