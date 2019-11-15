import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import EditPerson from './EditPerson.js'
/**
 * @type {React.CSSProperties}
 */
const style = {
    borderColor:"blue",
    borderWidth:5,
    backgroundColor:"purple",
    borderStyle:"solid",
}


class PeopleContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  componentDidMount() {
    this.props.mountEditForm(this.props.id);
    // if (!this.props.currentPerson) {
    //   this.props.setPerson(this.props.personForm)
    // }
  }
  render() {
    // console.log("PC current:", this.props.currentPerson);
    // console.log("person form:",this.props.personForm);


    // return (
    //   <div className="currentPerson-page">
    //     {this.props.currentPerson === undefined ? <h2>Loading . . .</h2> : (
    //       <div>
    //         {this.state.isEdit ?
    //           <Route path={'/people/:id/edit'} render={() => (
    //             <EditPerson
    //               handleFormChange={this.props.handleFormChange}
    //               handleSubmit={(e) => {
    //                 e.preventDefault();
    //                 this.props.editPerson();
    //                 this.setState({ isEdit: false })
    //                 this.props.history.push(`/people/${this.props.personForm.id}`)
    //               }}
    //               personForm={this.props.personForm} />
    //           )} />
    //           :
    //           <div>
    //             <h2>{this.props.currentPerson.name}</h2>
    //             <p>{this.props.currentPerson.relation}</p>
    //             <p>{this.props.currentPerson.virtual_interaction}</p>
    //             <p>{this.props.currentPerson.irl_interaction}</p>
    //             <button onClick={() => {
    //               this.setState({
    //                 isEdit: true
    //               })
    //               this.props.history.push(`/people/${this.props.currentPerson.id}/edit`)
    //             }}>Edit</button>
    //             <button onClick={() => {
    //               this.props.deletePerson(this.props.currentPerson.id);
    //               this.props.history.push('/')
    //             }}>Delete</button>
    //           </div>
    //         }
    //       </div>)}
    //   </div>)
    const { person } = this.props;
    return (
      <div 
        style={style}
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
              <>
                <h2>{person.name}</h2>
                <p>{person.relation}</p>
                <p>{person.virtual_interaction}</p>
                <p>{person.irl_interaction}</p>
                <p>{person.phone}</p>
                <p>{person.email}</p>
                <p>{person.address}</p>
                <p>{person.notes}</p>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/people/${person.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deletePerson(person.id);
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(PeopleContainer);