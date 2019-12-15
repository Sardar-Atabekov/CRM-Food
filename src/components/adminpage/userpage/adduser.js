import React, { Component } from "react";
import "./users.css";
import "./adduser.css";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import { postData } from "./../../requests";
import ModalWindow from "./../../modalWindow/modalWindow";

class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: false,
      error: null,
      message: "Правильно введите данные!",
      status: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target),
      data = {};

    formData.forEach(function(value, key) {
      data[key] = value;
    });

    let target = event.target;
    postData("/users/", data).then(res => {
      console.log(res);
      if (res.status !== "error") {
        this.setState({
          message: "Данные успешно добавлены!",
          status: true
        });
        target.reset();
      } else {
        this.setState({
          message: "Ошибка. Проверьте введенные данные",
          status: true
        });
      }
    });
  }

  render() {
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="addUserContent">
            <div className="card-header p-0">
              <div className="edit-user-details__bg">
                <img
                  src="https://www.texasheart.org/wp-content/uploads/2018/08/thi-christmas-lights-defocused-background-Bokeh-Gold-Blue.jpg"
                  alt="BackgroundImage"
                />
              </div>
            </div>
            <div className="formBlock">
              <div className="title-block">
                <div className="form-title">
                  <h6 className="form-text">User profile</h6>
                  <p className="form-text">
                    Configure general user profile information
                  </p>
                </div>
              </div>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      id="firstName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      required
                      id="lastName"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="dateBorn">Date Born</label>
                    <input
                      type="text"
                      name="dateBorn"
                      required
                      placeholder="2000-10-05"
                      className="form-control"
                      id="dateBorn"
                      pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" className="select">
                      <option value="Мужчина">Мужчина</option>
                      <option value="Женщина">Женщина</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      pattern="^\(?\+([9]{2}?[6])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$"
                      required
                      className="form-control"
                      id="phoneNumber"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      required
                      name="email"
                      className="form-control"
                      id="email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="login">Login</label>
                    <input
                      type="login"
                      required
                      name="login"
                      className="form-control"
                      id="login"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      required
                      name="password"
                      className="form-control"
                      id="password"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="startWorkDay">Start Work Day</label>
                    <input
                      type="text"
                      required
                      placeholder="2000-10-05"
                      className="form-control"
                      name="startWorkDay"
                      pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
                      id="startWorkDay"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select id="role" className="select" name="role">
                      <option value="3">Официант</option>
                      <option value="2">Повар</option>
                      <option value="4">Бармен</option>
                      <option value="1">Админ</option>
                    </select>
                  </div>
                </div>
                {/*
                          
                        
                          
                          <input placeholder="comment"/><br/>
                                              */}
                <div className="userProfilePicture">
                  <label htmlFor="userProfilePicture" className="text-center">
                    Profile Picture
                  </label>
                  <div className="user__avatar">
                    <img
                      src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png"
                      alt="User Avatar"
                    />
                    <label className="user__avatar__change">
                      <input
                        type="file"
                        id="userProfilePicture"
                        className="d-none"
                      />
                    </label>
                  </div>
                </div>
                <div className="commentBlock">
                  <label htmlFor="comment">Comment</label>
                  <br />
                  <textarea
                    id="comment"
                    name="comment"
                    className="form-control"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  className="btn btnSumbit"
                  value="Добавить"
                />
              </form>
            </div>
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
        {this.state.status ? (
          <ModalWindow
            message={this.state.message}
            statusModal={() => this.setState({ status: false })}
            status={this.state.status}
          />
        ) : null}
      </div>
    );
  }
}

export default addUser;
