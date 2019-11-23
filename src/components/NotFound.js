import React, { Component } from "react";
import { Link } from "react-router-dom";


class NotFound extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       isLoading: false,
//       error: null
//     };
//   }

  
  
  render() {
    

    return (
      <div className="wrapperCook">
        У нас нет такой страницы :( 
            <Link to="/"><br/><button className="nf_button">На главную</button></Link>
      </div>
    );
  }
}

export default NotFound;
