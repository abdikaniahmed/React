import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Button,
  Label,
  Row
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    console.log("Current state is " + JSON.stringify(values));
    alert("Current state is " + JSON.stringify(values));
    ///event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/Home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>
        <div className="col">
          <h3>Contact Us</h3>
          <hr />
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us Your feedback</h3>
          </div>
          <div className="col-md-9">
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="firstname" md={2}>
                  Firstname
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstname"
                    model=".firstname"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastname" md={2}>
                  lastname
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastname"
                    model=".lastname"
                    id="lastname"
                    name="lastname"
                    placeholder="last Name"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="telnum" md={2}>
                  Tel. Num
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".telnum"
                    model=".telnum"
                    id="telnum"
                    name="telnum"
                    placeholder="Telephone"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 6, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label md={2} htmlFor="txtArea">
                  Your feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".message"
                    rows="12"
                    name="message"
                    id="txtArea"
                    className="form-control"
                    placeholder="Write your message"
                  ></Control.textarea>
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary" className="btn-lg">
                    Send feedback
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
