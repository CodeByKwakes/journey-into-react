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
      <div>
        <ul>
          <li><Link to="dashboard">Dashboard</Link></li>
          <li><Link to="login">Login</Link></li>
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