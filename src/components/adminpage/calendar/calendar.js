import React, { Component } from "react";
import "./calendar.css";
class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.name };
  }

  render() {
    return (
      <div className="calendar">
        <input
          type="text"
          className="input-sm form-control"
          name="start"
          placeholder="Start Date"
          id="analytics-overview-date-range-1"
        />
        <input
          type="text"
          className="input-sm form-control"
          name="end"
          placeholder="End Date"
          id="analytics-overview-date-range-2"
        />
        
        <span className="input-group-append">
          <span className="input-group-text">
            <i className="material-icons"></i>
          </span>
        </span>
      </div>
    );
  }
}

export default Calendar;
