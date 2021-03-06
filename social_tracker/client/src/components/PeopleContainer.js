import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import EditPerson from './EditPerson.js'

class PeopleContainer extends Component {
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

    const { person } = this.props;
    return (
      <div 
        className="person-page">
        {person === undefined ? <h2>Loading . . .</h2> : (
          <div>
            {this.state.isEdit ?
              <Route path={'/people/:id/edit'} render={() => (
                <EditPerson
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editPerson();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/people/${this.props.personForm.id}`)
                  }}
                  personForm={this.props.personForm} />
              )} />
              :
              <div className="auth-container">
                <h2>{person.name}</h2>
                <p>Relation to the Person: {person.relation}</p>
                <p>Last virtual interaction: {person.virtual_interaction}</p>
                <p>Last time you met up: {person.irl_interaction}</p>
                <p>Phone number: {person.phone}</p>
                <p>Email: {person.email}</p>
                <p>Address: {person.address}</p>
                <p>Notes: {person.notes}</p>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/people/${person.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deletePerson(person.id);
                  this.props.history.push('/people')
                }}>Delete</button>
              </div>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(PeopleContainer);