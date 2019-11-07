import React, { Component } from 'react';
import {getData, putData} from '../../requests';
import './meals.css';
import Navigation from '../../block/navigation.js';
import Search from '../../block/search.js';
import Footer from '../../block/footer.js';
const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'admin/getmeals';



class MealsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    
    };
  }
  
  async componentDidMount() {
    getData(API + DEFAULT_QUERY)
    .then((body)=> {
        this.setState({data: body});
    });
  }

  // handleCheck(event) {
  //     let mealid = event.target.getAttribute('mealid');
  //     putData(`/admin/changeMealStatus/${mealid}`);
  // }
  

  render() {
    let { data } = this.state;
    console.log(data);

    
    
     return (
            <div className="wrapper">
                <aside className="navBlock"><Navigation/></aside>     
                <main className="container">
                    <header className="main-search"><Search/></header> 
                    <div className="mealsContent">
                      <table>
                        <tbody>
                        <tr> 
                            <th>Названия</th> 
                                                  
                            <th>Категория</th>
                            <th>Статус</th>
                            <th>Вес</th>   
                            <th>Цена</th>
                            
                        </tr>
                       {    
                        data.map(meal=>
                    
                        <tr key={meal.id}>   
                                                
                          <td>{meal.name}</td>
                          
                          <td>{meal.category}</td>
                          <td>
                            <label className="switch">
                              <input type="checkbox" mealid={meal.id} onChange={()=>{
                                putData(`/admin/changeMealStatus/${meal.id}`);
                              }} defaultChecked={meal.status === "Have"? true:false}/>
                              <span className="slider round"></span>
                            </label>    
                                                  
                          </td>
                          <td>{meal.weight}</td>
                          <td>{meal.price} сом</td>
                        </tr>
                       
                    
                    )  }
                        </tbody>
                       </table> 
                   </div>             
                    <footer className="main-footer"><Footer/></footer>  
                </main>
                    
            </div>
          );
        }
    
    
}
// var Checkbox = React.createClass({
//   getInitialState: function() {
//     return {checked: true}
//   },
//   handleCheck: function() {
//     this.setState({checked: !this.state.checked});
//   },
//   render: function() {
//     var msg;
//     if (this.state.checked) {
//       msg = "checked";
//     } else {
//       msg = "unchecked";
//     }
//     return (
//       <div>
//         <input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
//         <p>this box is {msg}.</p>
//       </div>
//     );
//   }
// });


export default MealsPage;
