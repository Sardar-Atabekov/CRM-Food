import React, { Component } from "react";
import { getData, API } from "../../requests.js";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: []
    };
  }

  componentDidMount() {
    getData(`${API}/Categories/`).then(category => {
      this.setState({ category });
    });
  }

  render() {
    console.log(this.state);
    return (
      <select className="select" name="categoryId">
        {this.state.category &&
          this.state.category.map(category => (
            <option value={category.id} key={category.id}>
              {category.category}
            </option>
          ))}
      </select>
    );
  }
}

export default Category;
