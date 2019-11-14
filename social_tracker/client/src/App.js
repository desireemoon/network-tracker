import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router';
import axios from "axios";

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Login from './components/Login'
import UserProfile from './components/UserProfile'
import Register from './components/Register'
import AllNetworks from './components/AllNetworks';
import NetworksContainer from './components/NetworkContainer'
import AllPeople from './components/AllPeople'
import PeopleContainer from './components/PeopleContainer';
import PeopleForm from './components/PeopleForm';

import './App.css';


import {
  createNetwork,
  readAllNetworks,
  updateNetwork,
  destroyNetwork,
  loginUser,
  registerUser,
  verifyUser,
  createPerson,
  readAllPeople,
  updatePerson,
  destroyPerson
} from './services/api-helper'




class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      networks: [],
      currentNetwork: {},
      networksLoaded: false,
      people: [],
      currentPerson: {},
      peopleLoaded: false,
      currentUser: null,
      authFormData: {
        name: "",
        username: "",
        email: "",
        password: ""
      }
    };
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    // console.log("auth data:", this.state.authFormData);
    console.log("current user:", this.state.currentUser);
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    console.log("new register", currentUser);
    // this.setState({ currentUser });
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

  // -------------- Networks ------------------
  getAllNetworks = () => {
    axios.get("/api/networks").then(jsonRes => {
      this.setState({
        networks: jsonRes.data,
        networksLoaded: true
      });
      console.log("jsonres:", jsonRes.data);
      // console.log("networks:", networks);
      console.log("state networks", this.state.networks);
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

  // -------------- People ------------------
  getAllPeople = () => {
    axios.get("/api/people").then(jsonRes => {
      this.setState({
        people: jsonRes.data,
        peopleLoaded: true
      });
      console.log("jsonres:", jsonRes.data);
      // console.log("people:", people);
      console.log("state people", this.state.people);
    });
  };

  handleDeletePerson = (removedPerson) => {
    this.setState({
      people: this.state.people.filter(person => person.id !== removedPerson.id)
    })
  }

  setPerson = (person) => {
    console.log("does person come thru", person);
    this.setState({
      currentPerson: person
    });
    console.log("state current person", this.state.currentPerson);
    
  };


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
            <Route exact path="/user/:username" render={() => (
              <UserProfile
                currentUser={this.state.currentUser}
                handl
                 />)} />
            <Route exact path="/networks" render={() => (
              <AllNetworks
                getAllNetworks={this.getAllNetworks}
                networks={this.state.networks}
                currentUser={this.state.currentUser}
                networksLoaded={this.networksLoaded}
                setNetwork={this.setNetwork}
              />)} />
              <Route exact path="/networks/:id" render={() => (
              <NetworksContainer
                currentUser={this.state.currentUser}
                currentNetwork={this.state.currentNetwork}
                getAllNetworks={this.getAllNetworks}
                networks={this.state.networks}
                networksLoaded={this.networksLoaded}
                setNetwork={this.setNetwork} 
                setPerson={this.setPerson}
                handleDeleteNetwork={this.handleDeleteNetwork}/>)}
            />
            <Route exact path="/people" render={() => (
              <AllPeople
                currentUser={this.state.currentUser}
                getAllPeople={this.getAllPeople}
                people={this.state.people}
                peopleLoaded={this.peopleLoaded}
                setPerson={this.setPerson} />)}
            />
             <Route exact path="/people/:id" render={() => (
              <PeopleContainer
                currentUser={this.state.currentUser}
                currentPerson={this.state.currentPerson}
                getAllPeople={this.getAllPeople}
                people={this.state.people}
                peopleLoaded={this.peopleLoaded}
                setPerson={this.setPerson} 
                handleDeletePerson={this.handleDeletePerson}/>)}
            />
            <Route exact path="/people/:id/edit" render={() => (
              <PeopleForm
                currentUser={this.state.currentUser}
                currentPerson={this.state.currentPerson}
                getAllPeople={this.getAllPeople}
                people={this.state.people}
                peopleLoaded={this.peopleLoaded}
                setPerson={this.setPerson} 
                />)}
            />
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
