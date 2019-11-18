import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import EditNetwork from './EditNetwork.js'

class NetworkContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }
  componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }
  render() {

    const { network } = this.props;
    return (
      <div
        className="network-page">
        {network === undefined ? <h2>Loading . . .</h2> : (
          <div>
            {this.state.isEdit ?
              <Route path={'/networks/:id/edit'} render={() => (
                <EditNetwork
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editNetwork();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/networks/${this.props.networkForm.id}`)
                  }}
                  networkForm={this.props.networkForm}
                  handleAddClick={this.props.handleAddClick}
                  handleRemoveClick={this.props.handleRemoveClick}
                  people={this.props.people} />
              )} />
              :
              <div className="auth-container">
                <h2>{network.name}</h2>
                <p>Network Type: {network.network_type}</p>
                <p>Description: {network.description}</p>
                <p>List of People in network:</p>
                {network.people && network.people.map(person => (
                  <div
                    key={person.id}
                    className="person-card"
                    onClick={(e) => {
                      this.props.history.push(`/people/${person.id}`);
                      window.scrollTo(0, 0);
                    }}>
                    <h3>
                      <p>{person.name}</p>
                    </h3>
                  </div>
                )
                )}
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/networks/${network.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteNetwork(network.id);
                  this.props.history.push('/networks')
                }}>Delete</button>
              </div>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(NetworkContainer);