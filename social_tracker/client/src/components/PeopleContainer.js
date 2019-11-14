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
  
  export default withRouter(PeopleContainer);