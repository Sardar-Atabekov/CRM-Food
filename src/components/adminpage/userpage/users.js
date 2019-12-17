import React, { Component } from "react";
import { getData } from "../../requests";
import { Link } from "react-router-dom";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "./../blocks/namePage";
import { API } from "./../../requests";
import { Time } from "../calendar/time";
import Loading from "../../loading/loading";
import DeleteModal from "./../../modalWindow/deleteModal";
import deleteIcon from "./../../images/deleteIcon.svg";
import editIcon from "./../../images/editIcon.svg";
import "./users.css";
const DEFAULT_QUERY = "/users";

class waiterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
      body: [],
      deleteModal: false,
      target: null
    };
    this.selectRole = this.selectRole.bind(this);
  }

  async componentDidMount() {
    getData(API + DEFAULT_QUERY).then(body => {
      this.setState({ body, isLoading: false });
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
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <main className="waiterContent">
              <div className="functionPage">
                <NamePage name="Сотрудники" />

                <div className="adduser">
                  <Link className="categories add" to={"/adduser"}>
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
                    <th>Имя</th>

                    <th>Возраст</th>
                    <th>Пол</th>
                    <th>Начала работы</th>
                    <th>Телефон</th>
                    <th>Email</th>
                    <th>Роль</th>
                    <th>Login</th>
                    <th>Пароль</th>
                    <th>Действие</th>
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
                        <td>{user.roleName}</td>
                        <td>{user.login}</td>
                        <td>{user.password}</td>
                        <td className="operationBlock">
                          <div className="operation">
                            <Link to={{ pathname: `/user/${user.id}/` }}>
                              <img src={editIcon} alt="editIcon" />
                            </Link>
                            <img
                              src={deleteIcon}
                              alt="deleteIcon"
                              onClick={event => {
                                this.setState({ deleteModal: true });
                                this.setState({
                                  target: event.target
                                });
                              }}
                            />
                          </div>
                          {this.state.deleteModal ? (
                            <DeleteModal
                              message={"сотрудника"}
                              target={this.state.target}
                              deleteStatus={() => {
                                this.setState({ deleteModal: false });
                              }}
                              url={`/users/${user.id}`}
                            />
                          ) : null}
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
          )}

          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default waiterPage;
