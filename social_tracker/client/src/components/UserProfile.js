import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


const UserProfile = (props) => {
    return (
            <div className="auth-container">
                <h2>{ props.currentUser.user ? props.currentUser.user.name: props.currentUser.name}'s Profile</h2>
                <p>Username: { props.currentUser.user ? props.currentUser.user.username: props.currentUser.username}</p>
                <p>Email: { props.currentUser.user ? props.currentUser.user.email: props.currentUser.email}</p>
            </div>
        )
    }


export default withRouter(UserProfile);