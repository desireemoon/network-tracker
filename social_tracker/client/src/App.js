import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import axios from "axios";
import './App.css';

class App extends Component {
  componentDidMount() {
    window.fetch('/api/networks')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     networks: [],
  //     currentTeacher: {},
  //     teachersLoaded: false
  //   };
  // }


  // getAllTeachers = () => {
  //   axios.get("/api/networks").then(jsonRes => {
  //     this.setState({
  //       networks: jsonRes.data.networks,
  //       teachersLoaded: true
  //     });
  //   });
  // };

  // handleDeleteTeacher = (removedTeacher) => {
  //   this.setState({
  //     teachers: this.state.teachers.filter(teacher => teacher.id !== removedTeacher.id)
  //   })
  // }

  // setTeacher = (teacher) => {
  //   this.setState({
  //     currentTeacher: teacher
  //   });
  // };
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
