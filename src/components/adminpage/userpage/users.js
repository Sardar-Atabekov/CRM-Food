import React, { Component } from "react";
import { getData, deleteData } from "../../requests";
import { Link } from "react-router-dom";
import "./users.css";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import Time from "../calendar/time";
const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "users";

class waiterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    getData(API + DEFAULT_QUERY).then(body => {
      this.setState({ data: body });
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
          <main className="waiterContent">
            <div className="adduser"><Link
                        className="sub-title"
                        to={`/adduser`}
                      >Add user</Link></div>
            <table>
              <tbody>
                <tr>
                  <th>Avatar</th>
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
                {data.map(user => (
                  <tr key={user.id}>
                    <td className="avatar">
                      <img
                        alt="avatarPictures"
                        src={`https://cdn2.static1-sima-land.com/items/2973837/1/700-nw.jpg`}
                      />
                    </td>
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
                        {
                          Time(user.startWorkDate)
                        }
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
                ))}
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
