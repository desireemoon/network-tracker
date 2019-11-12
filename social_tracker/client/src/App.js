import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import axios from "axios";

import Login from './components/Login'
import Register from './components/Register'
import AllNetworks from './components/AllNetworks';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

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



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      networks: [],
      currentNetwork: {},
      networksLoaded: false,
      currentUser: null,
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

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    console.log("auth data:", this.state.authFormData);
    console.log("current user:", this.state.currentUser);
    

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
        <header>
          <Header
            currentUser={this.state.currentUser}
            handleLogout={this.handleLogout}
            handleLogin={this.handleLoginButton}
          />
        </header>
        <main>
          <Switch>
            <Route
              exact path="/"
              render={() => (
                <Home />
              )}
            />
            <Route exact path="/login" render={() => (
              <Login
                currentUser={this.state.currentUser}
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} />)} />
            <Route exact path="/register" render={() => (
              <Register
                currentUser={this.state.currentUser}
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} />)} />
                <Route exact path="/networks" render={() => (
              <AllNetworks
                  getAllNetworks={this.getAllNetworks}
                currentUser={this.state.currentUser}
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} />)} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
