import React, { Component } from 'react';
import getData from '../../requests/getData';
import './menu.css';

const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'Waiter/getMenu';



class menuPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [], 
      categoriesData:[]
    };
  }
  
  async componentDidMount() {
    getData(API + DEFAULT_QUERY)
    .then((body)=> {
        this.setState({data: body});
    });
  }

  

  render() {
    let { data, categoriesData } = this.state;
    
    let bar = categoriesData.filter(category=>category.departmentName==="Бар"),
        cook = categoriesData.filter(category=>category.departmentName==="Кухня");
    
        console.log(bar);
        console.log(cook);
    
    
     return (
            <div className="menuWrapper">
                <header className="menu">  </header>   
                <main className="content">
                  {
                      data.map(item=>
                          <div className="item" key={item.departmentId}>
                              <h1>{item.departmentName}</h1>
                              <div className="categories">
                                {
                                  item.categories.map(category=> 
                                    <div key={category.categoryId}>
                                      {console.log(category)}
                                        <span>{category.categoryName}</span>
                                    </div>
                                  )
                                }

                              </div>


                          </div>
                      )
                  }                
                  
                </main>
            
            </div>
          );
        }
    
    
}


export default menuPage;
