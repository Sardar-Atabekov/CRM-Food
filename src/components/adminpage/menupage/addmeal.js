import React, { Component } from 'react';
import Navigation from '../../block/navigation.js';
import Search from '../../block/search.js';
import Footer from '../../block/footer.js';
import {postData, getData} from '../../requests.js';
import './addmeal.css';



class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      isLoading: false,
      error: [],
    };
  }

  async componentDidMount() {
    getData('https://neobiscrmfood.herokuapp.com/api/categories')
    .then((body)=> {
        this.setState({category: body});
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.target), data = {};
    
    formData.forEach(function(value, key) {
        data[key]=value;
    }); 
    console.log(data);
    postData( '/meals/', data);
   
  }
  
  nameVerification(event) {
    let value = event.target.value;
    console.log(value);
    getData('https://neobiscrmfood.herokuapp.com/api/meals')
    .then((body)=> {
       if(body.filter(item=>item.name===value)){
        
       }
       
    });
  
  }
  render() {
  let {category} = this.state;
  console.log(category);
    
    
    
    
     return (
            <div className="wrapper">
                <aside className="navBlock"><Navigation/></aside>               
                <div className="container">
                    <header className="main-search"><Search/></header> 
                    <main className="addMealContent">
                    <div className="formBlock">
                          <div className="title-block">
                            <div className="form-title">
                              <h6 className="form-text">Dish</h6>
                              <p className="form-text">Setting general dish information</p>
                            </div>
                          </div>
                        <form className="form"  onSubmit={this.handleSubmit}>
                        
                          <div className="form-row">
                              <div className="form-group">
                                      <label htmlFor="name">Name</label>
                                      <input type="text" name="name" className="form-control" id="name" value={this.state.numberOfGuests}
              onChange={this.nameVerification} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="categoryId">Category</label>
                                <select id="categoryId" className='select' name="categoryId" value={this.state.numberOfGuests}
              onChange={this.handleInputChange} >
                        {
                          category.map(category=> <option key={category.id} value={category.id}>{category.category}</option>)
                        }
                                      {/* <option value="3">Официант</option>
                                      <option value="2">Повар</option>   
                                      <option value="4">Бармен</option>   
                                      <option value="1">Админ</option>    */}
                                </select>
                              </div>
                              <div className="form-group">
                                      <label htmlFor="price">Price</label>
                                      <input type="number" name="price" required  className="form-control" id="price" />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="mealStatus">Status</label>
                                <select id="mealStatus" name="mealStatus"  className="select" value={this.state.numberOfGuests}
              onChange={this.handleInputChange} >
                                    <option value="0">Have</option>
                                    <option value="1">Not</option>   
                                </select>
                              </div>
                              
                              
                              <div className="form-group">
                                <label htmlFor="weight">Units</label>
                                <input required name="weight" className="form-control" id="weight" value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="imageURL">imageURL</label>
                                <input required name="imageURL" className="form-control" id="imageURL" value={this.state.numberOfGuests}
              onChange={this.handleInputChange} />
                              </div>
                          </div>
                          {/*
                          
                        
                          
                          <input placeholder="comment"/><br/>
                                              */}
                              <div className="userProfilePicture">
                                <label htmlFor="userProfilePicture" className="text-center">Dish Picture</label>
                                <div className="user__avatar">
                                  <img src="https://www.chatelaine.com/wp-content/uploads/2019/01/canada-new-food-guide-2019.jpeg" alt="DishPicture" />
                                  <label className="user__avatar__change">
                                    
                                    <input type="file" id="userProfilePicture" className="d-none" />
                                  </label>
                                </div>
                              </div>
                              <div className="commentBlock">
                                      <label htmlFor="description">Description</label><br/>
                                      <textarea id="description" name="description" className="form-control"></textarea>
                              </div>
                              <input type="submit" className="btn btnSumbit"/>
                                
                              
                          </form>
                      </div>
                  
                    </main>
                    <footer className="main-footer"><Footer/></footer>
                </div>
                
            </div>
          );
        }
    
    
}

export default addUser;
