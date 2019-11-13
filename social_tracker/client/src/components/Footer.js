import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



// This component handles our login form and has a link to the register form
const Footer = (props) => {

    return (
        <div className="footer-container">
            <div class="social-title">
                <h2 className="footer-h2">Connect with the programmer</h2>
            </div>
            <div class="social-links"> 
                <a href="https://git.generalassemb.ly/desireemoon/network-tracker">README</a>    
            </div>
            <div class="social-links"> 
                <a href="https://www.linkedin.com/in/desiree-dewysocki">LinkedIn</a>
            </div>
            <div class="social-links"> 
                <a href="https://github.com/desireemoon">Github</a>
            </div>
            <div class="social-links"> 
                <a href="mailto:desiree.dewysocki@gmail.com">Email</a>    
            </div>
            
        </div>
    );
}

export default withRouter(Footer);