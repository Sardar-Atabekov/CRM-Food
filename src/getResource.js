// import React, { Component } from 'react';
// import axios from 'axios';
// const API = 'https://hn.algolia.com/api/v1/search?query=';
// const DEFAULT_QUERY = 'redux';


// function 
// class getResourse extends Component {
//   ...
//   async componentDidMount() {
//     this.setState({ isLoading: true });
//     try {
//       const result = await axios.get(API + DEFAULT_QUERY);
//       this.setState({
//         hits: result.data.hits,
//         isLoading: false
//       });
//     } catch (error) {
//       this.setState({
//         error,
//         isLoading: false
//       });
//     }
//   }
//   ...
// }
// export default getResourse;