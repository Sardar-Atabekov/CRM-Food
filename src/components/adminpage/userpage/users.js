import React, { Component } from "react";
import { getData, deleteData } from "../../requests";
import { Link } from "react-router-dom";
import "./users.css";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "./../blocks/namePage";

import Time from "../calendar/time";
const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "users";

class waiterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      body: []
    };
    this.selectRole = this.selectRole.bind(this);
  }

  async componentDidMount() {
    getData(API + DEFAULT_QUERY).then(body => {
      this.setState({ body });
    });
  }

  selectRole(e) {
    let select = e.target.value,
      arr = this.state.body;
    console.log(arr);
    if (select === "all") {
      this.setState({ data: arr });
    } else {
      console.log(select);
      console.log(arr);
      arr = arr.filter(user => user.roleName === select);
      arr = arr.length > 0 ? arr : "false";
      console.log(arr);
      this.setState({ data: arr });
    }
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
          <main className="waiterContent">
            <div className="functionPage">
              <NamePage name="Users Page" />

              <div className="adduser">
                <Link className="categories" to={"/adduser"}>
                  Добавить
                </Link>
              </div>
              <div>
                <label htmlFor="department">По ролям: </label>
                <select
                  id="categoryId"
                  className="select"
                  name="categoryId"
                  onChange={this.selectRole}
                >
                  <option value="all">Все</option>
                  <option value="admin">Админ</option>
                  <option value="cook">Повар</option>
                  <option value="waiter">Официант</option>
                  <option value="barman">Бармен</option>
                </select>
              </div>
            </div>

            <table>
              <tbody>
                <tr>
                  <th>Name</th>

                  <th>Age</th>
                  <th>Gender</th>
                  <th>Start work date</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Login</th>
                  <th>Password</th>
                  <th>Operation</th>
                </tr>
                {typeof data === "object" ? (
                  data.map(user => (
                    <tr key={user.id}>
                      <td>
                        <Link
                          className="sub-title"
                          to={{ pathname: `/user/${user.id}/` }}
                        >
                          {user.firstName + " " + user.lastName}
                        </Link>
                      </td>

                      <td>
                        {new Date().getFullYear() -
                          new Date(user.dateBorn).getFullYear()}
                      </td>
                      <td>{user.gender}</td>
                      <td>
                        <time dateTime={user.startWorkDate}>
                          {Time(user.startWorkDate)}
                        </time>
                      </td>

                      <td>{user.phoneNumber}</td>
                      <td>{user.email}</td>
                      <td>{user.login}</td>
                      <td>{user.password}</td>
                      <td className="operationBlock">
                        <div className="operation">
                          <Link to={{ pathname: `/user/${user.id}/` }}>
                            Изменить{" "}
                          </Link>
                          <button
                            onClick={event => {
                              deleteData(`/users/${user.id}`);
                              event.target.parentNode.parentNode.parentNode.remove();
                            }}
                          >
                            Удалить{" "}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="noUsers">
                    <td colSpan="9">Нету пользователей</td>
                  </tr>
                )}
              </tbody>
            </table>
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default waiterPage;
