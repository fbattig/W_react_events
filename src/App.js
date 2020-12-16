import React, { Component } from "react";

class App extends Component {
  state = {
    username: "",
    password: "",
    passwordConfirmation: "",
    email: "",
    errors: []
  };

  displayForm() {
    return (
      <div>
        Username: <input type="text" onBlur={this.validateUsernameOnBlur} />
        <br />
        Password: <input type="text" onBlur={this.validatePasswordOnBlur} />
        <br />
        Password Confirmation:{" "}
        <input type="text" onBlur={this.validatePasswordConfirmationOnBlur} />
        <br />
        Email: <input type="text" onBlur={this.validateEmailOnBlur} />
        <br />
        <br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }

  displayErrors = () => {
    return (
      <div style={{ color: "red" }}>
        {this.state.errors.map((err, i) => (
          <p key={`err-${i}`}>{err}</p>
        ))}
      </div>
    );
  };

  validateNoEmpty = (fieldName, value) => {
    if (value.length <= 0) {
      return `${fieldName} must be filled out`;
    }
  };
  validateUsernameOnBlur = (event) => {
    const userName = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNoEmpty("UserName", userName));
    this.setState({ userName, errors });
  };
  validatePasswordOnBlur = (event) => {
    const password = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNoEmpty("Password", password));
    this.setState({ password, errors });
  };
  validatePasswordConfirmationOnBlur = (event) => {
    const passwordConfirmation = event.target.value;
    const errors = this.state.errors;
    errors.push(
      this.validateNoEmpty("PasswordConfirmation", passwordConfirmation)
    );
    this.setState({ passwordConfirmation, errors });
  };
  validateEmailOnBlur = (event) => {
    const email = event.target.value;
    const errors = this.state.errors;
    errors.push(this.validateNoEmpty("Email", email));
    errors.push(this.validateEmailFormat("Email", email));
    this.setState({ email, errors });
  };

  validateEmailFormat(fieldName, value) {
    let [lhs, rhs] = value.split("@");
    lhs = lhs || "";
    rhs = rhs || "";
    if (lhs.length <= 0 && rhs.length <= 0) {
      return `${fieldName} must be in a standard email format`;
    }
  }

  submitForm(event) {
    event.preventDefault();
    console.log("Submitting the form now...");
    console.log(event);
  }
  render() {
    return (
      <div className="App">
        {this.displayErrors()}
        <hr />
        {this.displayForm()}
      </div>
    );
  }
}

export default App;
