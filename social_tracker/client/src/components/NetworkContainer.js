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
              <Route path={'/people/:id/edit'} render={() => (
                <EditNetwork
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editNetwork();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/people/${this.props.networkForm.id}`)
                  }}
                  networkForm={this.props.networkForm} />
              )} />
              :
              <>
                <h2>{network.name}</h2>
                <p>{network.network_type}</p>
                <p>{network.description}</p>
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
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            }
          </div>)}
      </div>)
  }
  // componentDidMount() {
  //   this.props.mountEditForm(this.props.id);
  // }
  // render() {
  //   console.log(this.props.currentNetwork);

  //   return (
  //     <div className="currentNetwork-page">
  //       {this.props.currentNetwork === undefined ? <h2>Loading . . .</h2> : (
  //         <div>
  //           <h2>{this.props.currentNetwork.name}</h2>
  //           <p>{this.props.currentNetwork.network_type}</p>
  //           <p>{this.props.currentNetwork.description}</p>
  //           {this.props.currentNetwork && this.props.currentNetwork.people.map(person => (
  //             <div className="person-box" key={person.id}>
  //               {console.log(person)}
  //               <Link to={`/people/${person.id}`} onClick={() => this.props.setPerson(person)}>{person.name}</Link>
  //             </div>
  //           ))}

  //           {/* <img alt={currentPerson.name} src={currentPerson.photo} /> */}
  //           {/* {this.state.isEdit ?
  //             <Route path={'/people/:id/edit'} render={() => (
  //               <EditTeacher
  //                 handleFormChange={this.props.handleFormChange}
  //                 handleSubmit={(e) => {
  //                   e.preventDefault();
  //                   this.props.editTeacher();
  //                   this.setState({ isEdit: false })
  //                   this.props.history.push(`/teachers/${this.props.teacherForm.id}`)
  //                 }}
  //                 teacherForm={this.props.teacherForm} />
  //             )} />
  //             :
  //             <>
  //               <h1>{teacher.name}</h1>
  //               <button onClick={() => {
  //                 this.setState({
  //                   isEdit: true
  //                 })
  //                 this.props.history.push(`/teachers/${teacher.id}/edit`)
  //               }}>Edit</button>
  //               <button onClick={() => {
  //                 this.props.deleteTeacher(teacher.id);
  //                 this.props.history.push('/')
  //               }}>Delete</button>
  //             </>
  //           } */}
  //         </div>)}
  //     </div>)
  // }
}

export default withRouter(NetworkContainer);