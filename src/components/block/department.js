import React, { Component } from 'react';
import { getData} from '../requests.js';


class Department extends Component {
    constructor(props) {
        super(props);
            this.state = {
            category: [],
            };
    }
    
    componentDidMount() {
        getData(`https://neobiscrmfood.herokuapp.com/api/Departments`)
        .then((body)=> {
            this.setState({category: body});
            console.log(body);
        });
    }
    
    render() {
      
        return (
          <select  className='select' name="departmentId">
                          {
                            this.state.category.map(department=> <option value={department.id} key={department.id} >{department.name}</option>)
                          }
                                      
          </select>
        )
    }
}

export default Department;