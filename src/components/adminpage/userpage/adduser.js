import React, { Component } from 'react';
import getData from '../../requests/getData';
import './waiter.css';
import './adduser.css';
import Navigation from '../../block/navigation.js';
import Search from '../../block/search.js';
import operatorImg from '../../images/Screenshot.png';
import postData from '../../requests/postData';

const API = 'https://neobiscrmfood.herokuapp.com/api/';
const DEFAULT_QUERY = 'users';



class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: false,
      error: null,
    };
  }
  
  async componentDidMount() {
    getData(API + DEFAULT_QUERY)
    .then((body)=> {
        this.setState({data: body});
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    postData('/users/', data);
    
  }

  handleInputChange(event) {
    const target = event.target;
 
    
  }
  
  render() {
    let { data } = this.state;
    console.log(data);
   
    console.log(operatorImg);
    
    
    
     return (
            <div className="waiterWrapper">
                <aside>
                  <Navigation/> 
                </aside>
                <header>
                  <Search/>
                 
                </header> 
                <main className="addUser">
                     <div className="card-header p-0">
                      <div className="edit-user-details__bg">
                        <img src="https://www.texasheart.org/wp-content/uploads/2018/08/thi-christmas-lights-defocused-background-Bokeh-Gold-Blue.jpg" alt="BackgroundImage" />
                       
                      </div>
                    </div>
                    <div className="formBlock">
                        <div className="title-block">
                          <div className="form-title">
                            <h6 className="form-text">User profile</h6>
                            <p className="form-text">Configure general user profile information</p>
                          </div>
                        </div>
                       <form className="form"  onSubmit={this.handleSubmit}>
                       
                        <div className="form-row">
                            <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="firstName" className="form-control" id="firstName" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" name="lastName" className="form-control" required  id="lastName" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                    <label htmlFor="dateBorn">Date Born</label>
                                    <input type="text" name="dateBorn" required  className="form-control" id="dateBorn" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                            </div>
                            
                            <div className="form-group">
                              <label htmlFor="gender">Gender</label>
                              <select id="gender" name="gender"  className="select" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} >
                                  <option value="Мужчина">Мужчина</option>
                                  <option value="Женщина">Женщина</option>   
                              </select>
                            </div>
                            
                            <div className="form-group">
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                    <input type="tel" name="phoneNumber"
            pattern="^\(?\+([9]{2}?[6])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$"
            required className="form-control" id="phoneNumber" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="email">Email</label>
                              <input type="email" required name="email" className="form-control" id="email" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                    <label htmlFor="login">Login</label>
                                    <input type="login" required name="login" className="form-control" id="login" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" required name="password"  className="form-control" id="password" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                            </div>
                            
                            <div className="form-group">
                              <label htmlFor ="startWorkDay">Start Work Day</label>
                              <input type="text" required className="form-control" name="startWorkDay" id="startWorkDay" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
                            </div>
                            <div className="form-group">
                              <label htmlFor="role">Role</label>
                              <select id="role" className='select' name="role" value={this.state.numberOfGuests}
            onChange={this.handleInputChange} >
                                  <option value="Админ">Админ</option>
                                  <option value="Повар">Повар</option>   
                                  <option value="Бармен">Бармен</option>   
                                  <option value="Официант">Официант</option>   
                              </select>
                            </div>
                        </div>
                        {/*
                        
                      
                        
                        <input placeholder="comment"/><br/>
                                            */}
                            <div className="userProfilePicture">
                              <label htmlFor="userProfilePicture" className="text-center">Profile Picture</label>
                              <div className="user__avatar">
                                <img src="http://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png" alt="User Avatar" />
                                <label className="user__avatar__change">
                                  
                                  <input type="file" id="userProfilePicture" className="d-none" />
                                </label>
                              </div>
                            </div>
                            <div className="commentBlock">
                                    <label htmlFor="comment">Comment</label><br/>
                                    <textarea id="comment" className="form-control"></textarea>
                            </div>
                            <input type="submit" className="btn btnSumbit"/>
                              
                            
                        </form>
                    </div>
                </main>
                <footer>footer</footer>
            </div>
          );
        }
    
    
}

export default addUser;
