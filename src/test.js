import React, { Component } from "react";
import axios from "axios";


const API = "https://neobiscrmfood.herokuapp.com/api/";
const DEFAULT_QUERY = "cook/getActiveOrders";

class TestsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get(API + DEFAULT_QUERY);

      this.setState({
        data: result.data,
        isLoading: false
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }
  }
  render() {
    let { data, isLoading, error } = this.state;
   

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>;
    }

    console.log(data);
    return (
      <div className="wrapperCook">
        <canvas id="popChart" width="600" height="400"></canvas>
      </div>
    );
  }
}

export default TestsPage;
