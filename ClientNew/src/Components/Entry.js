import React from "react";
import "./form.css";
import axios from "axios";
import { Link } from "react-router-dom";

class Entry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      firstName: "",
      lastName: "",
      email: "",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.firstNameInputChangeHandler =
      this.firstNameInputChangeHandler.bind(this);
    this.lastNameInputChangeHandler =
      this.lastNameInputChangeHandler.bind(this);
    this.emailInputChangeHandler = this.emailInputChangeHandler.bind(this);
  }
  onSubmitHandler(e) {
    e.preventDefault();
    if (
      !(
        this.state.firstName === "" ||
        this.state.lastName === "" ||
        this.state.email === ""
      )
    ) {
      axios
        .post("/entry", {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
        })
        .then((res) => {
          console.log(res);
          alert(
            `New user created named ${this.state.firstName} ${this.state.lastName}`
          );
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("Please enter valid details");
    }
  }

  firstNameInputChangeHandler(event) {
    this.setState({
      firstName: event.target.value,
    });
  }
  lastNameInputChangeHandler(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  emailInputChangeHandler(event) {
    this.setState({
      email: event.target.value,
    });
  }

  render() {
    return (
      <div className="login">
        <div className="Sign_In">FORM</div>
        <div className="sign_">
          <form
            onSubmit={this.onSubmitHandler.bind(this)}
            method="post"
            className="sign_container"
          >
            <input
              onChange={this.firstNameInputChangeHandler}
              name="firstName"
              className="enter_sign"
              type="text"
              placeholder="Enter your FirstName"
            ></input>
            <input
              onChange={this.lastNameInputChangeHandler}
              name="lastName"
              type="text"
              placeholder="Enter your LastName"
              className="enter_pass"
            ></input>
            <input
              onChange={this.emailInputChangeHandler}
              name="email"
              type="text"
              placeholder="Enter your Email"
              className="enter_pass"
            ></input>
            <button type="submit" name="submit" className="button_sign">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Entry;
