import React, { Component } from 'react';
import {getData, postData, putData, deleteData} from "./../../requests";
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
      currentValue: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }
  
  addTableClick(event) {
    let data = {
        name:event.target.parentNode.firstChild.value,
        status:0
    };
    console.log(event.target.previousSibling.value);
    event.target.previousSibling.value='';
    // document.getElementById('detailed-form').reset()
    postData('/tables/', data);
  }

  changeTableClick(id, tableName) {
    const data = {
      id:id,
      name: tableName,
      status: 0,
    };
  // document.getElementById('detailed-form').reset()
  console.log(data);
  putData(`/tables/${id}`, data);
  }

  handleChange(e){
    this.setState({[e.target.name] : e.target.value});
  }

  
  async componentDidMount() {
    getData('https://neobiscrmfood.herokuapp.com/api/waiter/getTables')
    .then((body)=> {
        this.setState({data: body});
        console.log(body);
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
                    <div  className="addTable">
                       <input type='text' /> <button onClick={this.addTableClick}>Add</button>
                    </div>
                    
                      {
                          data.map(item=>
              <div className="item"  key={item.id}>  
              <input type='text' name="currentValue" className="item" defaultValue={item.name} onChange={this.handleChange} />
              <img onClick={() => this.changeTableClick(item.id, this.state.currentValue)} className="changeTable"  src="https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_icon-icons.com_69146.png"  alt="changeImg"/> 
              <img className="deleteTable" alt="deleteTable" src="https://cdn.dribbble.com/users/2087607/screenshots/5730291/x-delete-round-flat-icon-free-download.png" onClick={(event) =>{
                deleteData(`/tables/${item.id}`);
                event.target.parentNode.remove();
              }} /> 
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
