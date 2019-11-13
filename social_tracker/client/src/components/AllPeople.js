import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class AllPeople extends Component {
  componentDidMount = (props) => {
    console.log("props people", this.props.people);
    if (!this.props.peopleLoaded) {
      this.props.getAllPeople()
    }
    console.log("people", this.props.people);
  }

  render() {
    return (
      <div className="person-container">
        {this.props.people && this.props.people.map(person => (
          <div className="person-box" key={person.id}>
            <Link to={`/people/${person.id}`} onClick={() => this.props.setPeople(person)}>{person.name}</Link>
          </div>
        )
        )}
      </div>
    )
  }
}

export default withRouter(AllPeople);