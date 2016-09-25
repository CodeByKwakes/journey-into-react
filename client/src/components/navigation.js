//=================
// Import the dependencies that this component will need
// to function properly
//=================
import React, { Component } from "react";
import { Link } from 'react-router';

//=================
// This component will eventually act like our login Form
// but for now it's an alternate route we can test out
// to make sure our router is functioning.
//=================
export default class Navigation extends Component {
  render() {
    return (
      <div className="frame bit-1 navigation_container">
      <h3 className="bit-40"><Link to="/">Journey into React</Link></h3>
        <ul className="bit-60 nav_menu">
          <li key={100}><Link to="dashboard">Dashboard</Link></li>
          <li key={101}><Link to="login">Login</Link></li>
        </ul>
      </div>
    );
  }
}

/*class Navigation extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="login">Login</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navigation*/