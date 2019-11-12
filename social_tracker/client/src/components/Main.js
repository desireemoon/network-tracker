import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import axios from "axios";

import Login from './Login'
import Register from './Register'
import AllNetworks from './AllNetworks';

import {
    createNetwork,
    readAllNetworks,
    updateNetwork,
    destroyNetwork,
    loginUser,
    registerUser,
    verifyUser
  } from '../services/api-helper'

// This component handles our login form and has a link to the register form
class Main extends Component {
    constructor(props) {
      super(props)
      this.state = {
        networks: [],
        currentNetwork: {},
        networksLoaded: false,
        // currentUser: null,
        authFormData: {
          name: "",
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
        console.log("jsonres:", jsonRes.data);
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
    
    handleRegister = async (e) => {
      e.preventDefault();
      const currentUser = await registerUser(this.state.authFormData);
      this.setState({ currentUser });
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
        <div className="main-container">
            <Switch>
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
              <Route exact path="/login" render={() => (
                <Login
                  currentUser={this.props.currentUser}
                  handleLogin={this.props.handleLogin}
                  handleChange={this.authHandleChange}
                  formData={this.state.authFormData} />)} />
              <Route exact path="/register" render={() => (
                <Register
                  currentUser={this.props.currentUser}
                  handleRegister={this.handleRegister}
                  handleChange={this.authHandleChange}
                  formData={this.state.authFormData} />)} />
            </Switch>
        </div>
      );
    }
  }
  
  export default withRouter(Main);