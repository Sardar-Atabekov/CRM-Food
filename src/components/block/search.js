import React, { Component } from "react";
import bell from "./../images/bell.svg";
import profile from "./../images/profile.svg";
import "./navigation.css";

class Search extends Component {
  // handleSubmit(event) {
  //   event.preventDefault();
  //   let formData = new FormData(event.target);

  //   let data = {};
  //   formData.forEach(function(value, key) {
  //     data[key] = value;
  //   });
  // }
  render() {
    return (
      <nav className="serchNavbar">
        <div className="input">
          <input
            className="navbar-search form-control"
            type="text"
            placeholder="Поиск..."
            aria-label="Search"
          />
        </div>
        <div className="bell">
          <img src={bell} alt="bellImage" />
        </div>
        <div className="profileImage">
          <img src={profile} alt="bellImage" />
        </div>
      </nav>
    );
  }
}

export default Search;
