import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const neobisLogo = 'https://neobis.kg/static/media/Logo.4fff10de.svg';
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
    };
  }
  
 

  render() {
      
     return (
            <nav className="navigationComponent">
                <Link to={'/admin'}> <img src={neobisLogo} className="neobis_logo" alt='neobis.logo' /></Link>  
                <Link className="categories">Заказы</Link>
                <Link className="categories">Продажы</Link>
                <Link className="categories">Кухня</Link>
                <Link className="categories">Бар</Link>
                <Link className="categories">История транзакции</Link>
                <Link to={'/waiter'} className="categories">Пользователи</Link>
                <Link className="categories">Список блюд</Link>
                <Link className="categories">Категории</Link>
                <Link className="categories">Столы</Link>
                <Link className="categories">Бронирования</Link>
            </nav>   
                
          );
        }
    
    
}


export default Navigation;
