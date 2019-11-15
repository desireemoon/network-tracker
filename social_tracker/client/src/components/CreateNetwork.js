import React from 'react';
import { withRouter } from 'react-router-dom';

function NetworkCreation(props) {
    return (
        <div className="create-form" >
            <h2>Create a new Network</h2>
            <form onSubmit={props.newNetwork}>
                <p>*Network name:</p>
                <input
                    type="text"
                    name="name"
                    value={props.networkForm.name}
                    onChange={props.handleFormChange} />
                
                <p>*Network Type:</p>
                {/* <label htmlFor="network_type">Network Type:</label> */}
                <select name="network_type" value={props.networkForm.network_type} required>
                    <option value="Family">Family</option>
                    <option value="Friends">Friends</option>
                    <option value="Work">Work</option>
                    <option value="Other">Other</option>
                </select>
                <p>*Description:</p>
                <input
                    type="text"
                    name="description"
                    value={props.networkForm.description}
                    onChange={props.handleFormChange} />
                <p>*User ID:</p>
                <input
                    type="text"
                    name="user_id"
                    value={props.networkForm.user_id}
                    onChange={props.handleFormChange} />
                {/* <p>Add People:</p>
                <input
                    type="tel"
                    name="people"
                    value={props.networkForm.people}
                    onChange={props.handleFormChange} /> */}
                <input type="submit" name="submit" />
            </form>
            <p>* Indicates the field is required.</p>
        </div >
    )
}

export default withRouter(NetworkCreation);
