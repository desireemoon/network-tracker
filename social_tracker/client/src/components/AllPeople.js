import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AllPeople extends Component {

  render() {
    return (
      <div className="person-container">
        {this.props.people && this.props.people.map(person => (
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
      </div>
    )
  }
}

export default withRouter(AllPeople);