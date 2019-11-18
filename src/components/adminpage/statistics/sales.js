import React, { Component } from "react";
import Navigation from "../../block/navigation.js";
import Search from "../../block/search.js";
import Footer from "../../block/footer.js";
import Total from './blocks/totals';
import { getData } from "./../../requests";

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data3: [],
      isLoading: false,
      error: null,
      data1:[],
      data2:[],
      count:0
    };
  }

  async componentWillMount() {
    
        this.setState({count:this.state.count+1 });
    

    
  }

  render() {
    // let {data3, data1, data2} = this.state, data = [];
    // console.log(data3, data1, data2);
    // if(data3.length>0 && data1.length>0 && data2.length>0) {
    //     data = [...data3, ...data1, ...data2];
    //     console.log(data);
    // }

    return (
      <div className="wrapper">
        <aside className="navBlock">
          <Navigation />
        </aside>
        <div className="container">
          <header className="main-search">
            <Search />
          </header>
          <main className="salesContent">
                <div className="totals">
                    <Total/>
                    s
                </div>
          </main>
          <footer className="main-footer">
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
}

export default Sales;
