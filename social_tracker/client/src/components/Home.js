import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

const Home = (props) => {
  const CheckUser = (currentUser) => {
    if (currentUser == null) {
      return <Redirect to='/login' /> 
    }
  }
    return (
      <div className="">
         {CheckUser(props.currentUser)}
       <p className="home-message">Welcome Home Friend!</p>
       <p className="home-message">Click on the linkes above to login and register then create networks and people. Enjoy!</p>
      </div>
    );
  }
  
  export default withRouter(Home);