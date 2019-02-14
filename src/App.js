import React, { Component } from 'react';
import ShortId from 'shortid';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';
import { fields } from './config';
import { validateNumber } from './utils';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
      super();
      this.state = {
        contacts: {},
        editMode: false,
        editName: '',
        editNumber: ''
      }
      this.addContact = this.addContact.bind(this);
      this.removeContact = this.removeContact.bind(this);
      this.editContact = this.editContact.bind(this);
      this.updateContact = this.updateContact.bind(this);
  }

  addContact(name, number) {
    const newContacts = Object.assign({}, this.state.contacts);
    if(newContacts[number]) {
        alert('Contact already added');
        return false;
    } else if(!validateNumber(number)) {
        alert(`
            Invalid Number!
            A number must have 10 digits (0-9)
        `);
        return false;
    }
    newContacts[number] = {
        name,
        number
    }
    this.setState({
        contacts: newContacts
    });
  }

  removeContact(id) {
    const newContacts = Object.assign({}, this.state.contacts);
    delete newContacts[id];
    this.setState({
        contacts: newContacts
    });
  }

  editContact(id) {
    const { name, number } = this.state.contacts[id];
    this.setState({
        editMode: !this.state.editMode,
        editName: name,
        editNumber: number
    });

  }

  updateContact(name, number) {
    const newContacts = Object.assign({}, this.state.contacts);
    newContacts[this.state.editNumber] = {
        name,
        number
    };

    this.setState({
            contacts: newContacts,
            editMode: !this.state.editMode
        }
    )
  }

  render() {
    const { editMode, editName, editNumber } = this.state;
    return (
      <div className="App">
        {editMode ? 
        <ContactForm
            placeholderName={editName}
            placeholderNumber={editNumber}
            defaultNmae={editName}
            defaultNumber={editNumber}
            formType='Edit Contact'
            btnText='Save Contact'
            onSubmitHandler={this.updateContact}
        /> :
        <ContactForm
            placeholderName='Enter your name here'
            placeholderNumber='Enter your number'
            formType='Add Contact'
            btnText='Add Contact'
            onSubmitHandler={this.addContact}
        />}
        <ContactList
            contactArr={Object.values(this.state.contacts)}
            fields={fields}
            removeContact={this.removeContact}
            editContact={this.editContact}
        />
      </div>
    );
  }
}

export default App;
