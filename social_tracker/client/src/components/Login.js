import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



// This component handles our login form and has a link to the register form
const Login = (props) => {

  return (
    <div className="auth-container">
      <h2>login</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <p>Username:</p>
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <div className="login-buttons">
        <input type="submit" title="login"/>
        <Link to="/register"><button>Register</button></Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
