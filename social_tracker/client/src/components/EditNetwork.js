import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

const NetworkForm = (props) => {

    return (
        <div className="auth-container" >
            <h2>Edit Network</h2>
            <div >
                <p>*Network name:</p>
                <input
                    type="text"
                    name="name"
                    value={props.networkForm.name}
                    onChange={props.handleFormChange}
                    required />
                <p>*Network Type:</p>
                <input
                    type="text"
                    name="network_type"
                    value={props.networkForm.network_type}
                    onChange={props.handleFormChange}
                    required />
                <p>*Description:</p>
                <input
                    type="text"
                    name="description"
                    value={props.networkForm.description}
                    onChange={props.handleFormChange}
                    required />
                <p>*User ID:</p>
                <input
                    type="text"
                    name="user_id"
                    value={props.networkForm.user_id}
                    onChange={props.handleFormChange}
                    required />
                <p>Add People:</p>
                {props.people.map(person => {
                    return (
                        <div className="person-containers">
                            <p>{person.name}</p>
                            {props.people.includes({ 'id': person.id }) ?
                                <button onClick={() => props.handleRemoveClick(person)}>Remove</button> : <button value="Add" onClick={() => props.handleAddClick(person)}>Add</button>}
                        </div>
                    )
                })}
                <div className="login-buttons">
                    <button onClick={props.handleSubmit} className="submit">Submit</button>
                </div>           
                </div>
            <p>* Indicates the field is required.</p>
        </div >
    );
}

export default withRouter(NetworkForm);