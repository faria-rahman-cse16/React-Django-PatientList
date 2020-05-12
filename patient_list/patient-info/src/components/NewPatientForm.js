import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewPatientForm extends React.Component {
  state = {
    id: 0,
    name: "",
    age: "",
    address: "",
    contact_no: "",
	date:""
  };

  componentDidMount() {
    if (this.props.patient) {
      const { id, name, age, address, contact_no,date } = this.props.patient;
      this.setState({ id, name, age, address, contact_no,date });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPatient = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPatient = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.patient ? this.editPatient : this.createPatient}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age:</Label>
          <Input
            type="text"
            name="age"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.age)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Address:</Label>
          <Input
            type="text"
            name="address"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.address)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contact_no">Contact_no:</Label>
          <Input
            type="text"
            name="contact_no"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.contact_no)}
          />
        </FormGroup>
		<FormGroup>
          <Label for="date">Date:</Label>
          <Input
            type="text"
            name="date"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.date)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPatientForm;