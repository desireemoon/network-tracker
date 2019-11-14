import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



// This component handles our login form and has a link to the register form
const Header = (props) => {

    return (
        <div className="header-container">
            <div className="app-title">
            <Link to="/"><h1>Network Tracker</h1></Link>
            </div>
            <div className="nav">
                <div className="nav-button">
                    <Link to="/networks">Network List</Link>
                </div>
                <div className="nav-button">
                    <Link to="/people">People list</Link>
                </div>
                <div className="nav-button">
                    {props.currentUser
                        ?
                        <div className="log-buttons">
                            <div className="log"><Link to={ props.currentUser.user ? `/user/${props.currentUser.user.username}`: `/user/${props.currentUser.username}`}>{ props.currentUser.user ? props.currentUser.user.name: props.currentUser.name}'s Profile</Link></div>
                            <div className="log"><Link onClick={props.handleLogout}>logout</Link></div>
                        </div>
                        :
                        <Link to="/login" onClick={props.handleLoginButton}>Login/register</Link>
                    }
                </div>
            </div>
        </div>
    );
}

export default withRouter(Header);
