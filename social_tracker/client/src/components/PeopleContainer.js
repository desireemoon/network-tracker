import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class PeopleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  // componentDidMount() {
  //   this.props.mountEditForm(this.props.id);
  // }
  render() {
    console.log(this.props.currentPerson);
    
    return (
      <div className="currentPerson-page">
        {this.props.currentPerson === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <h2>{this.props.currentPerson.name}</h2>
            <p>{this.props.currentPerson.relation}</p>
            <p>{this.props.currentPerson.virtual_interaction}</p>
            <p>{this.props.currentPerson.irl_interaction}</p>
          </div>)}
      </div>)
  }
}
  
  export default withRouter(PeopleContainer);