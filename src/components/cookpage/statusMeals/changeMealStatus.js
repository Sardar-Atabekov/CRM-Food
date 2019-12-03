import React, { Component } from "react";
import { Link } from "react-router-dom";
import { putData, getData } from "../../requests";

class MealsCookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      categoryData: []
    };
  }

  async componentDidMount() {
    getData("http://neobiscrmfood.herokuapp.com/api/Categories").then(
      categoryData => {
        this.setState({ categoryData });
      }
    );
    getData("http://neobiscrmfood.herokuapp.com/api/Cook/getMeals").then(
      data => {
        data = data && data.filter(meal => meal.department === "Kitchen");
        this.setState({ data });
      }
    );
  }

    handleSelectCategory(event) {
      let select = event.target.value;
      console.log(select);
      let arr = this.state.body;
      
      if (select === "all") {
        this.setState({ data: arr });
      } else {
        this.setState({
          data: arr.filter(category => category.categoryId === +select)
        });
      }
    }

  render() {
    let { isLoading, error, data, categoryData } = this.state;
    
    categoryData =
      categoryData &&
      categoryData.filter(meal => meal.departmentName === "Kitchen");
    if (error) {
      return <p>{error.message}</p>;
    }

    console.log(data);
    console.log(categoryData);
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

          <div className="selectDepartment">
            <label htmlFor="department">По категориям: </label>
            <select
              id="categoryId"
              className="select"
              onChange={this.handleSelectCategory}
              name="categoryId"
            >
              <option value="all">Все</option>
              {categoryData.length > 0 &&
                categoryData.map(category => (
                  <option value={category.id} key={category.id}>
                    {category.category}
                  </option>
                ))}
            </select>
          </div>
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
