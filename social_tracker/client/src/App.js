import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
import axios from "axios";

import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import NotFound from './components/NotFound'

import Login from './components/Login'
import UserProfile from './components/UserProfile'
import Register from './components/Register'

import AllNetworks from './components/AllNetworks';
import NetworksContainer from './components/NetworkContainer'
import NetworkCreation from './components/CreateNetwork'

import AllPeople from './components/AllPeople'
import PeopleContainer from './components/PeopleContainer';
import PersonCreation from './components/CreatePerson'

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
      networkForm: {
        name: "",
        network_type: "",
        description: '',
        user_id: '',
        people: []
      },
      people: [],
      currentPerson: {},
      peopleLoaded: false,
      currentUser: null,
      personForm: {
        name: "",
        relation: '',
        virtual_interaction: '',
        irl_interaction: '',
        phone: '',
        email: '',
        address: '',
        notes: "",
      },
      authFormData: {
        name: "",
        username: "",
        email: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    this.getAllNetworks();
    this.getAllPeople();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
    
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

  handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
    if (this.state.currentUser == null) {
      return <Redirect to='/login' /> 
    }
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
  getAllNetworks = async () => {
    const networks = await readAllNetworks();
    this.setState({
      networks: networks,
      networksLoaded: true
    })
  }
  newNetwork = async (e) => {
    e.preventDefault();
    const network = await createNetwork(this.state.networkForm);
    this.setState(prevState => ({
      networks: [...prevState.networks, network],
      networkForm: {
        name: "",
        photo: ""
      }
    }))
  }

  setNetwork = (network) => {
    this.setState({
      currentNetwork: network
    });
  };

  editNetwork = async () => {
    const { networkForm } = this.state
    await updateNetwork(networkForm.id, networkForm);
    this.setState(prevState => (
      {
        networks: prevState.networks.map(network => network.id === networkForm.id ? networkForm : network),
      }
    ))
  }

  deleteNetwork = async (id) => {
    await destroyNetwork(id);
    this.setState(prevState => ({
      networks: prevState.networks.filter(network => network.id !== id)
    }))
  }

  networkHandleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      networkForm: {
        ...prevState.networkForm,
        [name]: value
      }
    }))
  }

  networkMountEditForm = async (id) => {
    const networks = await readAllNetworks();
    const network = networks.find(el => el.id === parseInt(id));
    this.setState({
      networkForm: network
    });
  }
  // -------------- People ------------------
  getAllPeople = async () => {
    const people = await readAllPeople();
    this.setState({
      people: people,
      peopleLoaded: true
    })
  }

  setPerson = (person) => {
    console.log("does person come thru", person);
    this.setState({
      currentPerson: person
    });
    console.log("state current person", this.state.currentPerson);

  };

  newPerson = async (e) => {
    e.preventDefault();
    const person = await createPerson(this.state.personForm);
    this.setState(prevState => ({
      people: [...prevState.people, person],
      personForm: {
        name: "",
        photo: ""
      }
    }))
  }

  editPerson = async () => {
    const { personForm } = this.state
    await updatePerson(personForm.id, personForm);
    this.setState(prevState => (
      {
        people: prevState.people.map(person => person.id === personForm.id ? personForm : person),
      }
    ))
  }

  deletePerson = async (id) => {
    await destroyPerson(id);
    this.setState(prevState => ({
      people: prevState.people.filter(person => person.id !== id)
    }))
  }

  personHandleFormChange = (e) => {
    const { name, value } = e.target;
    console.log("the target", e.target);
    this.setState(
      prevState => ({
        personForm: {
          ...prevState.personForm,
          [name]: value
        }
      }))
    console.log("updated person form:", this.personForm);

  }

  personMountEditForm = async (id) => {
    const people = await readAllPeople();
    const person = people.find(el => el.id === parseInt(id));
    this.setState({
      personForm: person
    });
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
            <Route exact path="/user/:username" render={() => (
              <UserProfile
                currentUser={this.state.currentUser}
                handl
              />)} />
            <Route exact path="/networks" render={() => (
              <AllNetworks
                currentUser={this.state.currentUser}
                networks={this.state.networks}
                networkForm={this.state.networkForm}
                handleFormChange={this.networkHandleFormChange}
              />)} />
              <Route
              path="/new/network"
              render={() => (
                <NetworkCreation
                  handleFormChange={this.networkHandleFormChange}
                  networkForm={this.state.networkForm}
                  newNetwork={this.newNetwork} />
              )} />
             <Route
              path="/networks/:id"
              render={(props) => {
                const { id } = props.match.params;
                const network = this.state.networks.find(el => el.id === parseInt(id));
                return <NetworksContainer
                  id={id}
                  network={network}
                  handleFormChange={this.networkHandleFormChange}
                  mountEditForm={this.networkMountEditForm}
                  editNetwork={this.editNetwork}
                  networkForm={this.state.networkForm}
                  deleteNetwork={this.deleteNetwork}
                />
              }}
              />
            <Route exact path="/people" render={() => (
              <AllPeople
                currentUser={this.state.currentUser}
                people={this.state.people}
                personForm={this.state.personForm}
                handleFormChange={this.personHandleFormChange}
              />)}/>
            <Route
              path="/new/person"
              render={() => (
                <PersonCreation
                  handleFormChange={this.personHandleFormChange}
                  personForm={this.state.personForm}
                  newPerson={this.newPerson} />
              )} />
            <Route
              path="/people/:id"
              render={(props) => {
                const { id } = props.match.params;
                const person = this.state.people.find(el => el.id === parseInt(id));
                return <PeopleContainer
                  id={id}
                  person={person}
                  handleFormChange={this.personHandleFormChange}
                  mountEditForm={this.personMountEditForm}
                  editPerson={this.editPerson}
                  personForm={this.state.personForm}
                  deletePerson={this.deletePerson}
                />
              }}
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
