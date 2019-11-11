import React, { Component } from "react";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import { putData, getData } from "../../requests.js";

import "./addmeal.css";
import ModalBlock from "../../block/Modal.js";

class MealPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      data: [],
      id: 0,
      select: 1,
      status: 0
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      select: e.target.value
    });
  }

  handleStatusChange(e) {
    this.setState({
      status: e.target.value
    });
  }

  componentDidMount() {
    getData(
      `https://neobiscrmfood.herokuapp.com/api/meals/${this.props.match.params.id}/`
    ).then(body => {
      this.setState({
        data: body,
        select: body.categoryId,
        id: body.id,
        status: body.mealStatus
      });
    });
    getData(`https://neobiscrmfood.herokuapp.com/api/Categories/`).then(
      body => {
        this.setState({ category: body });
      }
    );
  }
  
  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target),
      data = {};

    data.id = `${this.state.id}`;
    formData.forEach(function(value, key) {
      data[key] = value;
    });
    putData(`/meals/${data.id}`, data);
  }

  render() {
    let { data, category } = this.state;
    console.log(this.state);
    console.log(category);
    
    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="addMealContent">
            <div className="formBlock">
              <div className="title-block">
                <div className="form-title">
                  <h6 className="form-text">Dish</h6>
                  <p className="form-text">Setting general dish information</p>
                </div>
              </div>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      defaultValue={data.name}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="categoryId">Category</label>
                    <select
                      id="categoryId"
                      className="select"
                      name="categoryId"
                      onChange={this.handleChange.bind(this)}
                      value={this.state.select}
                    >
                      {category.map((category,id) => (
                        <option value={category.id} key={id}>
                          {category.category}
                        </option>
                      ))}
                        {/* {
                           for( i=0; i<10; i++) {
                           console.log(arr[i]);
                           };
                        } */}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      name="price"
                      required
                      defaultValue={data.price}
                      className="form-control"
                      id="price"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="mealStatus">Status</label>
                    <select
                      id="mealStatus"
                      name="mealStatus"
                      className="select"
                      onChange={this.handleStatusChange.bind(this)}
                      value={this.state.status}
                    >
                      <option value="0">Have</option>
                      <option value="1">Not</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="weight">Units</label>
                    <input
                      required
                      name="weight"
                      className="form-control"
                      id="weight"
                      defaultValue={data.weight}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
                {/*
                          
                        
                          
                          <input placeholder="comment"/><br/>
                                              */}
                <div className="userProfilePicture">
                  <label htmlFor="userProfilePicture" className="text-center">
                    Dish Picture
                  </label>
                  <div className="user__avatar">
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
                  </div>
                </div>
                <div className="commentBlock">
                  <label htmlFor="description">Description</label>
                  <br />
                  <textarea
                    id="description"
                    name="description"
                    value={data.description}
                    className="form-control"
                  ></textarea>
                </div>
                <ModalBlock />
              </form>
            </div>
          </main>
          <footer className="main-footer" >
            <Footer />
            
          </footer>
        </div>
      </div>
    );
  }
}

export default MealPage;
