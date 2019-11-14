import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';

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
} from '../services/api-helper'

const PeopleForm = (props) => {

    return (
      <div className="">
       
      </div>
    );
  }
  
  export default withRouter(PeopleForm);