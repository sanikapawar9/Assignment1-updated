import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddPersonModal({ show, handleClose, addPerson }){
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function firstNameHandler(event){
    setFirstName(event.target.value);
  }

  function lastNameHandler(event){
    setLastName(event.target.value);
  }

  function onSubmit(){
    addPerson({ 
        FirstName: firstName, 
        LastName: lastName 
    });
    setFirstName('');
    setLastName('');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Add New Person</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={firstNameHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={lastNameHandler}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={handleClose}>Close</Button>
        <Button variant="success" onClick={onSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddPersonModal;
