import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = (props) => {

    return (
      <div className="">
       <p className="home-message">Welcome Home Friend!</p>
       <p className="home-message">Click on the linkes above to login and register then create networks and people. Enjoy!</p>


      </div>
    );
  }
  
  export default withRouter(Home);