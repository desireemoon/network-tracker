import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter } from 'react-router-dom';

const PeopleForm = (props) => {
  return (
    <div className="create-form" >
        <h2>Edit Person</h2>
        <form onSubmit={props.handleSubmit}>
            <p>*Person's name:</p>
            <input
                type="text"
                name="name"
                value={props.personForm.name}
                onChange={props.handleFormChange} />
            <p>*Relation to the Person:</p>
            <input
                type="text"
                name="relation"
                value={props.personForm.relation}
                onChange={props.handleFormChange} />
            <p>*Last virtual interaction:</p>
            <input
                type="text"
                placeholder="YYYY-MM-DD"
                name="virtual_interaction"
                value={props.personForm.virtual_interaction}
                onChange={props.handleFormChange} />
            <p>*Last time you met up:</p>
            <input
                type="text"
                placeholder="YYYY-MM-DD"
                name="irl_interaction"
                value={props.personForm.irl_interaction}
                onChange={props.handleFormChange} />
            <p>Phone number:</p>
            <input
                type="tel"
                name="phone"
                value={props.personForm.phone}
                onChange={props.handleFormChange} />
            <p>Email:</p>
            <input
                type="email"
                name="email"
                value={props.personForm.email}
                
                onChange={props.handleFormChange} />
            <p>Address:</p>
            <input
                type="text"
                name="address"
                value={props.personForm.address}
                onChange={props.handleFormChange} />
            <p>Notes:</p>
            <input
                type="text"
                name="notes"
                value={props.personForm.notes}
                onChange={props.handleFormChange} />
                <input type="submit" name="submit"/>
        </form>
        <p>* Indicates the field is required.</p>
    </div >
)
  }
  
  export default withRouter(PeopleForm);