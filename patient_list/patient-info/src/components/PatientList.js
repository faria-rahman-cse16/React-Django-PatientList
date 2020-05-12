import React, { Component } from "react";
import { Table } from "reactstrap";
import NewPatientModal from "./NewPatientModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class PatienttList extends Component {
     
constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
    this.handleChange = this.handleChange.bind(this);

  }
  
  handleChange = event => {
    this.setState({ searchString: event.target.value });
  }	
  
  render(){
	
    const patients = this.props.patients;
    return (
	
    
       <div class="container">
  <input class="form-control mb-4" id="tableSearch" type="text"
    placeholder="Search by name..." onChange={this.handleChange}/>  
      <table class="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="myTable">
          {!patients || patients.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            patients.filter(patient => patient.name.includes(this.state.searchString)).map(patient => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.address}</td>
                <td>{patient.contact_no}</td>
                <td>{patient.date}</td>
                <td align="center">
                  <NewPatientModal
                    create={false}
                    patient={patient}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={patient.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
	</div>
    );
  }
}

export default PatienttList;