import React, { Component } from "react";
import { Link } from "react-router-dom";
import { putData } from "../../requests";

import axios from "axios";
const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "cook/getMeals";

class MealsCookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get(API + DEFAULT_QUERY);
      this.setState({
        data: result.data,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }

  render() {
    let data = this.state.data.length > 0 ? this.state.data : this.state.body;
    let { isLoading, error } = this.state;
    data = data && data.filter(meal => meal.department === "Kitchen");
    if (error) {
      return <p>{error.message}</p>;
    }

    console.log(data);
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div className="cookPage">
        <h1 className="titleCook">Меню</h1>
        <div className="funcCook">
          <Link to={"/cook"} className="menuBtn">
            Активные заказы
          </Link>
        </div>
        <div className="wrapperCook statusCook">
          <table>
            <tbody>
              <tr>
                <th>Названия</th>

                <th>Категория</th>
                <th>Статус</th>
                <th>Ед. изм.</th>
                <th>Цена</th>
                <th colSpan="2">Описания</th>
              </tr>
              {data &&
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
                            putData(`/cook/changeMealStatus/${meal.id}`);
                          }}
                          defaultChecked={meal.status === "Have" ? true : false}
                        />
                        <span className="slider round"></span>
                      </label>
                    </td>
                    <td>{meal.weight}</td>
                    <td>{meal.price} сом</td>
                    <td colSpan="2">{meal.description}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default MealsCookPage;
