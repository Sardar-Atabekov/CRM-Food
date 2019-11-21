import React from 'react';
import Modal from 'react-responsive-modal';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <input
                  type="submit"  onClick={this.onOpenModal}
                  className="btn btnSumbit"
                  value={this.props.name}
                />
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>{this.props.message}</h2>
        </Modal>
      </div>
    );
  }
}
