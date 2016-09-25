//=================
// Import the dependencies that this component will need
// to function properly
//=================
import React, { Component } from "react"
import { testAction } from '../actions/index'
import { connect } from 'react-redux'



//=================
// This is the component we'll be importing as the index route of our
// router.
//=================
class Dashboard extends Component {
  handleClickHello() {
  this.props.testAction()
}
  render() {
    return (
      <div>
        <h4>This is the dashboard</h4>
        <a onClick={this.handleClickHello.bind(this) }>Knock Knock</a>
        <h3>{this.props.auth.message}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  { testAction }
)(Dashboard);

/*class Dashboard extends Component {
  render() {
    return (
      <div>
       This is the dashboard
      </div>
    )
  }
}

export default Dashboard*/