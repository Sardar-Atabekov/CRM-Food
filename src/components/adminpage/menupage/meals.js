import React, { Component } from "react";
import { getData, putData, deleteData, API } from "../../requests";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "./../blocks/namePage.js";
import { Link } from "react-router-dom";
import Category from "./selectCategory";
import "./meals.css";
const DEFAULT_QUERY = "/admin/getMeals";

class MealsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      body: []
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  async componentDidMount() {
    getData(API + DEFAULT_QUERY).then(body => {
      this.setState({ body });
    });
  }

  handleSelectCategory(select) {
    let arr = this.state.body;
    console.log(select);
    if (select === "all") {
      this.setState({ data: arr });
    } else {
      arr = arr.filter(category => category.categoryId === +select);
      arr = arr.length > 0 ? arr : "Нету блюд";
      this.setState({
        data: arr
      });
    }
  }

  render() {
    let data = this.state.data.length > 0 ? this.state.data : this.state.body;
    console.log(data);
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <main className="container">
          <header className="main-search">
            <Search />
          </header>
          <div className="mealsContent">
            <div className="functionPage">
              <NamePage name="Блюди" />
              <div className="addMeal">
                <Link to={"/addmeal"} className="categories add">
                  Добавить
                </Link>
              </div>

              <Category onSelectCategory={this.handleSelectCategory} />
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Названия</th>

                  <th>Категория</th>
                  <th>Статус</th>
                  <th>Ед. изм.</th>
                  <th>Цена</th>
                  <th colSpan="2">Операции</th>
                </tr>
                {typeof data === "object" ? (
                  data.map(meal => (
                    <tr key={meal.id}>
                      <td>
                        <Link to={{ pathname: `/meal/${meal.id}/` }}>
                          {meal.name}
                        </Link>
                      </td>

                      <td>{meal.category}</td>
                      <td>
                        <label className="switch">
                          <input
                            type="checkbox"
                            onChange={() => {
                              putData(`/admin/changeMealStatus/${meal.id}`);
                            }}
                            defaultChecked={
                              meal.status === "Have" ? true : false
                            }
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>
                      <td>{meal.weight}</td>
                      <td>{meal.price} сом</td>
                      <td>
                        <Link to={{ pathname: `/meal/${meal.id}/` }}>
                          Изменить
                        </Link>
                      </td>
                      <td
                        className="deleteMeal"
                        onClick={event => {
                          deleteData(`/meals/${meal.id}`);
                          event.target.parentNode.remove();
                        }}
                      >
                        Удалить
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6">Нету блюд</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <footer className="main-footer">
            <Footer />
          </footer>
        </main>
      </div>
    );
  }
}

export default MealsPage;
