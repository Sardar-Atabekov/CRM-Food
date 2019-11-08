import React, { Component } from 'react';
import {getData} from "./../../requests";
import Navigation from '../../block/navigation.js';
import Search from '../../block/search.js';
import Footer from '../../block/footer.js';
import './tables.css';


class Tables extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  
  async componentDidMount() {
    getData('https://neobiscrmfood.herokuapp.com/api/Tables')
    .then((body)=> {
        this.setState({data: body});
    });
  }

  render() {
    let { data } = this.state;
       
    
    

     return (
            <div className="wrapper">
                <aside className="navBlock"><Navigation/></aside>  
                <div className="container">
                  <header className="main-search"><Search/></header> 
                  <main className="tableContent">
                    <input type='text' className="addTable" />
                      {
                          data.map(item=>
              <div className="item"  key={item.id}>  
              <input type='text' className="item" defaultValue={item.name}/>
              <img src="https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_icon-icons.com_69146.png" className="changeTable" onClick alt="changeImg"/> 
              <img className="deleteTable" alt="deleteTable" src="https://cdn.dribbble.com/users/2087607/screenshots/5730291/x-delete-round-flat-icon-free-download.png"/> 
              </div>
                                  )
                      }
                  </main>
                  <footer className="main-footer"><Footer/></footer>
                </div>
            </div>
          );
        }
    
    
}


export default Tables;
