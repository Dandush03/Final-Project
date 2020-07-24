import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

// Import Components
import { LinkButton } from '../components';

// Import Assets
import logo from '../assets/images/logo.svg';

import '../assets/styles/App.scss';

class Home extends Component {
  constructor(props) {
    super(props)
    this.login = props.login
  }

  render() {
    this.login = this.props.login
    if(!this.login) {
      const location = window.location.toString();
      console.log(location);
      window.location.replace(location + "users/sign_in")
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <LinkButton to="/">Back to home</LinkButton>
      </div>
    );
  }
}

Home.propTypes = {
  login: PropTypes.bool
};

const structeredSelector = createStructuredSelector({
  login: (state) => state.user.login,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Home);
