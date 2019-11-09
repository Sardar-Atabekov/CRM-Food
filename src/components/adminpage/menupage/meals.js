import React, { Component } from "react";
import { getData, putData } from "../../requests";
import "./meals.css";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import { Link } from 'react-router-dom';

const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "admin/getmeals";

class MealsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    getData(API + DEFAULT_QUERY).then(body => {
      this.setState({ data: body });
    });
  }

  // handleCheck(event) {
  //     let mealid = event.target.getAttribute('mealid');
  //     putData(`/admin/changeMealStatus/${mealid}`);
  // }

  render() {
    let { data } = this.state;
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
            <div className='function'> 
                
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Названия</th>

                  <th>Категория</th>
                  <th>Статус</th>
                  <th>Ед. изм.</th>
                  <th>Цена</th>
                </tr>
                {data.map(meal => (
                  <tr key={meal.id}>
                    <td><Link to={{pathname: `/meal/${meal.id}/`}}>{meal.name}</Link></td>

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
