import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import StudentList from "./PatientList";
import NewStudentModal from "./NewPatientModal";


import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    patients: []
  };

  componentDidMount() {
    this.resetState();
  }

  getPatients = () => {
    axios.get(API_URL).then(res => this.setState({ patients: res.data }));
  };

  resetState = () => {
    this.getPatients();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <StudentList
              patients={this.state.patients}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewStudentModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;