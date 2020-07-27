import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// Import Assets
import logo from '../assets/images/logo.svg';
import '../assets/styles/App.scss';

class Home extends Component {
  constructor(props) {
    super(props);
    this.login = props.login;
  }

  render() {
    const { props: { login } } = this;
    this.login = login;
    if (!this.login) {
      const location = window.location.toString();
      window.location.replace(`${location}users/sign_in`);
    }
    return (
      <main className="App">
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
      </main>
    );
  }
}

Home.propTypes = {
  login: PropTypes.bool.isRequired,
};

const structeredSelector = createStructuredSelector({
  login: (state) => state.user.login,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Home);
