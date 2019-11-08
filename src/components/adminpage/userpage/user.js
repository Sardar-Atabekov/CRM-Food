import React, { Component } from 'react';
import './waiter.css';
import './adduser.css';
import Navigation from '../../block/navigation.js';
import Search from '../../block/search.js';
import Footer from '../../block/footer.js';

import {putData, getData} from '../../requests.js';




class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  
  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    let formData = new FormData(event.target), data = {},
        id = event.target.firstChild.getAttribute('userid');
    
    formData.forEach(function(value, key) {
        data[key]=value;
    });
   
    console.log(data);

    putData(`/users/${7}`, data);
    console.log(id);
  }

  async componentDidMount(id) {
    getData(`https://neobiscrmfood.herokuapp.com/api/users/${this.props.match.params.id}/`)
    .then((body)=> {
        this.setState({data: body});
        console.log(body);
    });
  }
  
  render() {
  let {data} = this.state;
  console.log(data);
   
    
    
    
    
     return (
            <div className="wrapper">
                <aside className="navBlock"><Navigation/></aside>               
                <div className="container">
                  <header className="main-search"><Search/></header> 
                  <main className="addUserContent">
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
            
                        <form className="form" userid={data.id} key={data.id} onSubmit={this.handleSubmit}>
                        
                          <div className="form-row" >
                              <div className="form-group">
                                      <label htmlFor="firstName">First Name</label>
                                      <input type="text" name="firstName" className="form-control" id="firstName" defaultValue={data.firstName}
              onChange={this.handleInputChange} />
                              </div>
                              <div className="form-group">
                                      <label htmlFor="lastName">Last Name</label>
                                      <input type="text" name="lastName" className="form-control" required  id="lastName" defaultValue={data.lastName}
              onChange={this.handleInputChange} />
                              </div>
                              <div className="form-group">
                                      <label htmlFor="dateBorn">Date Born</label>
                                      <input type="text" name="dateBorn" required  className="form-control" id="dateBorn" defaultValue={data.dateBorn}
              pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"  />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor="gender">Gender</label>
                                <select id="gender" name="gender"  className="select" defaultValue={this.state.numberOfGuests}
              onChange={this.handleInputChange} >
                                    <option value="Мужчина">Мужчина</option>
                                    <option value="Женщина">Женщина</option>   
                                </select>
                              </div>
                              
                              <div className="form-group">
                                      <label htmlFor="phoneNumber">Phone Number</label>
                                      <input type="tel" name="phoneNumber"
              pattern="^\(?\+([9]{2}?[6])\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{3})$"
              required className="form-control" id="phoneNumber" defaultValue={data.phoneNumber}
              onChange={this.handleInputChange} />
                              </div>
                              <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" required name="email" className="form-control" id="email" defaultValue={data.email}
              onChange={this.handleInputChange} />
                              </div>
                              <div className="form-group">
                                      <label htmlFor="login">Login</label>
                                      <input type="login" required name="login" className="form-control" id="login" defaultValue={data.login}
              onChange={this.handleInputChange} />
                              </div>
                              <div className="form-group">
                                      <label htmlFor="password">Password</label>
                                      <input type="password" required name="password"  className="form-control" id="password" defaultValue={data.password}
              onChange={this.handleInputChange} />
                              </div>
                              
                              <div className="form-group">
                                <label htmlFor ="startWorkDay">Start Work Day</label>
                                <input type="text" required className="form-control" name="startWorkDay" id="startWorkDay" defaultValue={data.startWorkDay}
              onChange={this.handleInputChange} />
                              </div>
                              
                              
                              <div className="form-group">
                                <label htmlFor="role">Role</label>
                                <select id="role" className='select' name="role" defaultValue={data.role}
              onChange={this.handleInputChange} >
                                    <option value="3">Официант</option>
                                    <option value="2">Повар</option>   
                                    <option value="4">Бармен</option>   
                                    <option value="1">Админ</option>   
                                </select>
                              </div>
                          </div>
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
                                      <textarea id="comment"  name="comment" defaultValue={data.comment} className="form-control"></textarea>
                            </div>
                              <input type="submit" className="btn btnSumbit" value="Обновить"/>
                                 
                              
                          </form>
                        
                      </div>
                  </main>
                  <footer className="main-footer"><Footer/></footer>
                </div>
                
            </div>
          );
        }
    
    
}

export default UserPage;
