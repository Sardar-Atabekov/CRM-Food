
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal.css';
const ModalBlock = (props) => {
  let {message } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <input
                  type="submit"  onClick={toggle}
                  className="btn btnSumbit"
                  value="Добавить"
                />
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Message</ModalHeader>
        <ModalBody>
          {message}
        </ModalBody >
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Окей</Button>
          {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default ModalBlock;
