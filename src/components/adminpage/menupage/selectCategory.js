import React, { Component } from "react";
import { getData } from "../../requests";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      select: null
    };

    this.handleSelectCategory = this.handleSelectCategory.bind(this);
  }

  componentDidMount() {
    getData(`https://neobiscrmfood.herokuapp.com/api/Categories/`).then(
      body => {
        this.setState({ category: body });
        console.log(body);
      }
    );
  }

  handleSelectCategory(event) {
    let select = event.target.value;
    this.props.onSelectCategory(select);
  }

  render() {
    return (
      <select
        id="categoryId"
        className="select"
        onChange={this.handleSelectCategory}
        name="categoryId"
      >
        <option value="all">Все</option>
        {this.state.category.map(category => (
          <option value={category.id} key={category.id}>
            {category.category}
          </option>
        ))}
      </select>
    );
  }
}

export default Category;
