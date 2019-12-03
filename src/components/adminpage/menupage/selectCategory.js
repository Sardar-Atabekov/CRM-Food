import React, { Component } from "react";
import { getData } from "../../requests";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  componentDidMount() {
    getData(`https://neobiscrmfood.herokuapp.com/api/Categories/`).then(
      data => {
        this.setState({ data });
      }
    );
  }

  handleSelectCategory(event) {
    let select = event.target.value;
    this.props.onSelectCategory(select);
  }

  render() {
    let { data } = this.state;
    return (
      <div className="selectDepartment">
        <label htmlFor="department">По категориям: </label>
        <select
          id="categoryId"
          className="select"
          onChange={this.handleSelectCategory}
          name="categoryId"
        >
          <option value="all">Все</option>
          {data.length > 0 &&
            data.map(category => (
              <option value={category.id} key={category.id}>
                {category.category}
              </option>
            ))}
        </select>
      </div>
    );
  }
}

export default Category;
