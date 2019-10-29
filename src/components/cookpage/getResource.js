
import axios from 'axios';

const API = 'https://hn.algolia.com/api/v1/search?query=';

const DEFAULT_QUERY = 'cook/getactiveorders';


async getResourse() {
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
  
export default getResourse;