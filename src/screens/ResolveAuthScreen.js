import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions/auth_actions';

class ResolveAuthScreen extends Component {
  componentDidMount() {
    this.props.tryLocalSignIn();
  }

  render() {
    return null;
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(ResolveAuthScreen);

// Purpose of this screen is to render first(invisibly), on startup
// This screen returns null, meaning nothing displays !!
