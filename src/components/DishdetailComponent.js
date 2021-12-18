import React, { useState, Component  } from "react";
import { Card, CardBody, CardText, CardTitle, CardImg, Breadcrumb, BreadcrumbItem, Button, Label, Modal, ModalBody,ModalHeader } from "reactstrap";
import { Link } from "react-router-dom";
import { Control, LocalForm, Errors } from "react-redux-form";
//import { Modal } from "bootstrap";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function handleSubmit(values) {
  console.log("Current state is " + JSON.stringify(values));
  alert("Current state is " + JSON.stringify(values));
  ///event.preventDefault();
}

function RenderComments({ comments }) {
  if (comments != null) {
    return (
      <div>
        <h4>comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  --{comments.author} ,
                  {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                  }).format(new Date(Date.parse(comment.date)))}
                </p>
              </li>
            );
          })}
        </ul>
         <CommentForm />
      </div>
    );
  } else {
    return <div></div>;
  }
}
const DishDetail = (props) => {
  if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/Home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-md">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  else {
    return <div></div>;
  }
};
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleSubmitComment(values) {
    this.toggleModal();
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  render() {
    return (
      <div>
        <div className="ml-auto">
          <Button outline onClick={this.toggleModal}>
            <span className="fa fa-pencil fa-lg"></span> Submit Comment
          </Button>
        </div>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>Submit Comment </ModalHeader>
              <ModalBody>
                <LocalForm onSubmit={(values) => handleSubmit(values)}>
                  <Label htmlFor="rating">Rating</Label>
                  <Control.select
                    model=".rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                  <Label htmlFor="yname" className="mt-2">
                    lastname
                  </Label>
                  <Control.text
                    model=".yname"
                    id="yname"
                    name="yname"
                    placeholder="Your Name"
                    className="form-control mb-2"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".yname"
                    show="touched"
                    messages={{
                      required: "Required ",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                  <Label htmlFor="comment">Your feedback</Label>
                  <Control.textarea
                    model=".comment"
                    rows="6"
                    name="comment"
                    id="comment"
                    className="form-control"
                    placeholder="Write your Comment"
                  ></Control.textarea>

                  <Button type="submit" color="primary" className="mt-2">
                    Submit
                  </Button>
                </LocalForm>
              </ModalBody>
            </Modal>
      </div>
    );
  }
}

export default DishDetail;