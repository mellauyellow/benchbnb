import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.redirectIfLoggedIn = this.redirectIfLoggedIn.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user, this.props.formType);
  }

  update(property) {
    return (e) => {
      this.setState({[property]: e.target.value});
    };
  }

  componentDidUpdate(){
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if (this.props.loggedIn){
      hashHistory.push("/");
    }
  }

  render() {
    let header = this.props.formType === "/signup" ? "Sign Up" : "Log In";
    let link = this.props.formType === "/login" ? "/signup" : "/login";
    let linkString = this.props.formType === "/login" ? "Sign Up" : "Log In";
    let errors;

    if (this.props.errors.length === 0) {
      errors = <br></br>;
    } else {
      errors = this.props.errors.map((error, idx) => (
        <li key={idx}>{error}</li>
      ));
    }

    return (
      <div className="session-form">
        <h2>{header}</h2>
        <ul>
          {errors}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" value={this.state.username} onChange={this.update("username")}></input>
          <input type="password" placeholder="password" value={this.state.password} onChange={this.update("password")}></input>
          <input type="submit" value={header}></input>
        </form>
        <Link to={link}>{linkString}</Link>
      </div>
    );
  }
}

export default SessionForm;
