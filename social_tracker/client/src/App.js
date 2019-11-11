import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import axios from "axios";

import Login from './components/Login'
import Register from './components/Register'

import './App.css';


import {
  createNetwork,
  readAllNetworks,
  updateNetwork,
  destroyNetwork,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'
import AllNetworks from './components/AllNetworks';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      networks: [],
      currentNetwork: {},
      networksLoaded: false,
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }


  getAllNetworks = () => {
    axios.get("/api/networks").then(jsonRes => {
      this.setState({
        networks: jsonRes.data,
        networksLoaded: true
      });
      console.log("jsonres:",jsonRes.data);
      // console.log("networks:", networks);
      
    });
    
  };

  handleDeleteNetwork = (removedNetwork) => {
    this.setState({
      networks: this.state.networks.filter(network => network.id !== removedNetwork.id)
    })
  }

  setNetwork = (network) => {
    this.setState({
      currentNetwork: network
    });
  };

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.currentUser
            ?
            <>
              <p>{this.state.currentUser.username}</p>
              <button onClick={this.handleLogout}>logout</button>
            </>
            :
            <button onClick={this.handleLoginButton}>Login/register</button>
          }
        </div>

        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route
          exact path="/"
          render={() => (
            <AllNetworks
            getAllNetworks={this.getAllNetworks}
            networks={this.state.networks}
            networksLoaded={this.state.networksLoaded}
            setNetwork={this.setNetwork}
               />
          )}
        />
      
      </div>
    );
  }
}

export default withRouter(App);
