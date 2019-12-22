import React, { Component } from "react";
import { postData } from "../../requests.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import { getData, API } from "../../requests.js";
import Navigation from "../../block/navigation.js";
import ModalWindow from "./../../modalWindow/modalWindow";
import "./addmeal.css";
import Loading from "../../loading/loading.js";

class addMeal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      isLoading: false,
      error: [],
      data: [],
      status: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    getData(`${API}/Categories/`).then(category => {
      this.setState({ category, isLoading: true });
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target),
      data = {};

    formData.forEach(function(value, key) {
      data[key] = value;
    });

    let target = event.target;
    postData("/meals/", data).then(res => {
      console.log(res);
      if (res.status !== "error" && res.status !== 400) {
        this.setState({
          message: "Данные успешно добавлены!",
          status: true
        });
        target.reset();
      } else {
        this.setState({
          message: res.message,
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
          {this.state.isLoading ? (
            <main className="addMealContent">
              <div className="formBlock">
                <div className="title-block">
                  <div className="form-title">
                    <h6 className="form-text">Блюда</h6>
                    <p className="form-text">Заполните информация о блюде</p>
                  </div>
                </div>
                <form className="form" onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Названия</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="categoryId">Категория</label>
                      <select className="select" name="categoryId">
                        {this.state.category &&
                          this.state.category.map(category => (
                            <option value={category.id} key={category.id}>
                              {category.category}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="price">Цена</label>
                      <input
                        type="number"
                        name="price"
                        required
                        className="form-control"
                        id="price"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mealStatus">В наличии</label>
                      <select
                        id="mealStatus"
                        name="mealStatus"
                        className="select"
                      >
                        <option value="0">Есть</option>
                        <option value="1">Нет</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="weight">Единиц измерение</label>
                      <input
                        required
                        name="weight"
                        className="form-control"
                        id="weight"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="imageURL">Изображения</label>
                      <input
                        required
                        name="imageURL"
                        className="form-control"
                        id="imageURL"
                      />
                    </div>
                  </div>
                  {/* <div className="userProfilePicture">
                  <label htmlFor="userProfilePicture" className="text-center">
                    Изображения
                  </label>
                  {/* <div className="user__avatar">
                    <img
                      src="https://www.chatelaine.com/wp-content/uploads/2019/01/canada-new-food-guide-2019.jpeg"
                      alt="DishPicture"
                    />
                    <label className="user__avatar__change">
                      <input
                        type="file"
                        id="userProfilePicture"
                        className="d-none"
                      />
                    </label>
                  </div> */}
                  {/* </div> */}
                  <div className="commentBlock">
                    <label htmlFor="description">Описания</label>
                    <br />
                    <textarea
                      id="description"
                      name="description"
                      className="form-control"
                      required
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
          ) : (
            <Loading />
          )}
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

export default addMeal;
