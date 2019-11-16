import React, { Component } from "react";
import { getData } from "../requests.js";

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

  // handleLangChange = () => {
  //   console.log(this);
  //   let select = this.target.value;
  //   this.props.onSelectCategory(select);
  // }
  // handleLangChange = () => {
  //   var lang = this.dropdown.value;git add
  //   this.props.onSelectLanguage(lang);
  // }

  render() {
    return (
      <select
        id="categoryId"
        className="select"
        onChange={this.handleSelectCategory}
        name="categoryId"
      >
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
