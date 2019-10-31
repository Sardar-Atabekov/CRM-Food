import React, { Component } from 'react';
import axios from 'axios';
const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'categories';



class waiterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  
  async componentDidMount() {
    this.setState({ isLoading: true });
    try {
      const result = await axios.get(API + DEFAULT_QUERY);
 
      this.setState({
        data: result.data,
        isLoading: false,
        
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
   // data= data.filter(a=>a.mealsList.some(s=>s.departmentName==="Кухня"));
    
    if (error) {
      return <p>{error.message}</p>;
    }
    console.log(data);
    if (isLoading) {
      return <p>Loading ...</p>;
    }
    
     return (
            <div className="wrapper">
                <header className="menu"> Menu </header>
            {      
                
                data.map(сategory=>
                    <div className="item" key={сategory.id}>
                       
                            
                           
                      
                    </div> 
                )
            }   
            </div>
          );
        }
    
    
}


export default waiterPage;
