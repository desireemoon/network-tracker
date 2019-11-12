import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



// This component handles our login form and has a link to the register form
const Header = (props) => {

    return (
        <div className="header-container">
            <div className="app-title">
                <h1>Network Tracker</h1>
            </div>
            <div className="nav">
                <div className="nav-button">
                    <Link>Network List</Link>
                </div>
                <div className="nav-button">
                    <Link>People list</Link>
                </div>
                <div className="nav-button">
                    {props.currentUser
                        ?
                        <>
                            <p>{props.currentUser.username}</p>
                            <Link onClick={props.handleLogout}>logout</Link>
                        </>
                        :
                        <Link to="/login" onClick={props.handleLoginButton}>Login/register</Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default withRouter(Header);
