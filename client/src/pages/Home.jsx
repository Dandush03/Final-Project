import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// Import Assets
import '../assets/styles/App.scss';

// Import Components
import { Progress } from '../container/index';

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
        <Progress />
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
