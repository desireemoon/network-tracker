import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


class NetworkContainer extends Component {
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
    console.log(this.props.currentNetwork);
    
    return (
      <div className="currentNetwork-page">
        {this.props.currentNetwork === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <h2>{this.props.currentNetwork.name}</h2>
            <p>{this.props.currentNetwork.network_type}</p>
            <p>{this.props.currentNetwork.description}</p>
            {this.props.currentNetwork && this.props.currentNetwork.people.map(person => (
              <div className="person-box" key={person.id}>
                {console.log(person)}
                <Link to={`/people/${person.id}`} onClick={() => this.props.setPerson(person)}>{person.name}</Link>
              </div>
            ))}

            {/* <img alt={currentPerson.name} src={currentPerson.photo} /> */}
            {/* {this.state.isEdit ?
              <Route path={'/people/:id/edit'} render={() => (
                <EditTeacher
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editTeacher();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/teachers/${this.props.teacherForm.id}`)
                  }}
                  teacherForm={this.props.teacherForm} />
              )} />
              :
              <>
                <h1>{teacher.name}</h1>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/teachers/${teacher.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteTeacher(teacher.id);
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            } */}
          </div>)}
      </div>)
  }
}
  
  export default withRouter(NetworkContainer);