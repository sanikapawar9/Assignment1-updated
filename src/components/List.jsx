import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import AddPersonModal from './AddPersonModal.jsx'; 

function List(){
  const [peopleName, setPeopleName] = useState([
    { 
      FirstName: "Merry", 
      LastName: "Williams" 
    },
    { 
      FirstName: "Jane", 
      LastName: "Doe" 
    },
    { 
      FirstName: "Steve", 
      LastName: "Smith" }
  ]);

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModal(){
    setModalIsVisible(true);
  }

  function HideModal(){
    setModalIsVisible(false);
  }

  function handleAddPerson(newName){
    if (!newName.FirstName || !newName.LastName) {
      alert('Please enter first name and last name.');
      return;
    }
    setPeopleName(peopleName => [...peopleName, newName]);
  };

  function handleRemovePerson(index){
    setPeopleName(peopleName => peopleName.filter((person, i) => i !== index));
  };

  const listNames = peopleName.map((person, index) => (
    <ListGroup.Item key={index} variant="secondary" className="d-flex justify-content-between align-items-center">
      {person.FirstName} {person.LastName}
      <Button variant="light" size="sm" onClick={() => handleRemovePerson(index)}>X</Button>
    </ListGroup.Item>
  ));

  return (
    <div className="container mt-4">
      <ListGroup>{listNames}</ListGroup>
      <Button variant="primary" className="mt-3" onClick={showModal}>Add Person</Button>
      <AddPersonModal show={modalIsVisible} handleClose={HideModal} addPerson={handleAddPerson} />
    </div>
  );
};

export default List;
