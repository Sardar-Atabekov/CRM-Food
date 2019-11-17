import React, { Component } from "react";

class Total extends Component {

  render() {
    let total = this.props.total;
    return (
      <div className="total">
            <span>
                {/* {total.name} */}
            </span>
            <span>
                {/* {total.count} */}
            </span>
      </div>
    );
  }
}

export default Total;
