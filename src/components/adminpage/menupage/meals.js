import React, { Component } from "react";
import { getData, putData, deleteData } from "../../requests";
import "./meals.css";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import NamePage from "./../blocks/namePage.js";
import { Link } from "react-router-dom";
import Category from "../../block/category.js";

const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "admin/getMeals";

class MealsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      select:null
    };
  }

  async componentDidMount() {
    getData(API + DEFAULT_QUERY).then(body => {
      this.setState({ data: body });
    });
  }

  handleSelectCategory = (langValue) => {
    this.setState({select: langValue});
  }
  // handleSelectCategor(){

  // }

  render() {
    let { data } = this.state;
    console.log(data);
    console.log(this.state);
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
              <NamePage name="Meals page" />
              <div className="addMeal">
                <Link to={"/addmeal"} className="categories">
                  Добавить
                </Link>
              </div>
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
              <Category onSelectCategory={this.handleSelectCategory}/>
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
                {data.map(meal => (
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
                          defaultChecked={meal.status === "Have" ? true : false}
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
                ))}
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
