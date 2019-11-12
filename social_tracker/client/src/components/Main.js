import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';




// This component handles our login form and has a link to the register form
const Main = (props) => {

    return (
        <div className="main-container">
          {/* <Switch>
          <Route
              exact path="/"
              render={() => (
                <Home  
                />
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
                handleLogin={this.handleLogin}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} />)} />
            <Route exact path="/register" render={() => (
              <Register
                handleRegister={this.handleRegister}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData} />)} />
          </Switch> */}
        </div>
    );
}

export default withRouter(Main);