import React from 'react';
import { withRouter } from 'react-router-dom';

function PersonCreation(props) {
    return (
        <div className="auth-container" >
            <h2>Create a new Person</h2>
            <form onSubmit={props.newPerson}>
                <p>*Person's name:</p>
                <input
                    type="text"
                    name="name"
                    value={props.personForm.name}
                    onChange={props.handleFormChange}
                    required />
                <p>*Relation to the Person:</p>
                <input
                    type="text"
                    name="relation"
                    value={props.personForm.relation}
                    onChange={props.handleFormChange} 
                    required/>
                <p>*Last virtual interaction:</p>
                <input
                    type="text"
                    placeholder="YYYY-MM-DD"
                    name="virtual_interaction"
                    value={props.personForm.virtual_interaction}
                    onChange={props.handleFormChange}
                    required />
                <p>*Last time you met up:</p>
                <input
                    type="text"
                    placeholder="YYYY-MM-DD"
                    name="irl_interaction"
                    value={props.personForm.irl_interaction}
                    onChange={props.handleFormChange} 
                    required/>
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
                <p>address:</p>
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
                <div className="login-buttons">
                    <input className="submit" type="submit" />
                </div>
            </form>
            <p>* Indicates the field is required.</p>
        </div >
    )
}

export default withRouter(PersonCreation);
