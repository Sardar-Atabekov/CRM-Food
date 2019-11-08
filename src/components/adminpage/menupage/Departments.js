import React, { Component } from 'react';
import {getData, postData, putData, deleteData} from "../../requests";
import Navigation from '../../block/navigation.js';
import Search from '../../block/search.js';
import Footer from '../../block/footer.js';
import './menu.css';


class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  
  addTableClick(event) {
    let data = {
        name:event.target.parentNode.firstChild.value,
        status:0
    };
    event.target.parentNode.firstChild.value='';
    // document.getElementById('detailed-form').reset()
    postData('/Departments/', data);
  }

  changeTableClick(event) {
    let id=event.target.getAttribute('id'), data = {
      name:event.target.parentNode.firstChild.value,
      status:0,
    };
  // document.getElementById('detailed-form').reset()
  console.log(data);
  putData(`/Departments/${id}`, data);
  }

  
  async componentDidMount() {
    getData('https://neobiscrmfood.herokuapp.com/api/Waiter/getMenu')
    .then((body)=> {
        this.setState({data: body});
        console.log(body);
    });
  }

  render() {
    let { data } = this.state,
        barDepartment = data.filter(department=>department.departmentName==="Бар"),
        cookDepartment = data.filter(department=>department.departmentName==="Кухня");
    console.log(barDepartment);
    console.log(cookDepartment);

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
              <div className="item"  key={item.departmentId}>  
                  <input type='text' className="item" defaultValue={item.departmentName}/>
                  <img id={item.id} src="https://cdn.icon-icons.com/icons2/894/PNG/512/Tick_Mark_icon-icons.com_69146.png" className="changeTable" onClick={this.changeTableClick}  alt="changeImg"/> 
                  <img className="deleteTable" alt="deleteTable" src="https://cdn.dribbble.com/users/2087607/screenshots/5730291/x-delete-round-flat-icon-free-download.png" onClick={(event) =>{
                    deleteData(`/Departments/${item.departmentId}`);
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


export default Departments;
