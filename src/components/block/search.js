import React, { Component } from "react";
import "./navigation.css";

class Search extends Component {
  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    let data = {};
    formData.forEach(function(value, key) {
      data[key] = value;
    });
  }
  render() {
    return (
      <nav className="serchNavbar">
        <div className="input">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-search"></i>
            </div>
          </div>
          <input
            className="navbar-search form-control"
            type="text"
            placeholder="Search for something..."
            aria-label="Search"
          />
        </div>
        <div>Push</div>
        <div>User</div>
      </nav>
    );
  }
}

export default Search;
