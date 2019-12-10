import React from "react";
import OK from "./../images/ready.svg";
import "./modalWindow.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.status
    };
  }

  //   onCloseModal = () => {
  //     this.setState({ open: false });
  //   };

  handleStatus() {
    this.props.statusModal(false);
  }

  render() {
    return (
      <div className="modalWindow">
        <h2>{this.props.message}</h2>
        <img src={OK} alt={"Ok"} />
      </div>
    );
  }
}
