import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


// This component handles our register form
const Register = (props) => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <hr />
      <form onSubmit={props.handleRegister} >
        <p>Name:</p>
        <input name="name" type="text" value={props.formData.name} onChange={props.handleChange} />
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Email:</p>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <div>
          <input className="submit" type="submit" />
        </div>
      </form>
    </div>
  );
}

export default withRouter(Register);
