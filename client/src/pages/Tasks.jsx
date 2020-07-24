import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// Import Components

// Import Assets
import '../assets/styles/App.scss';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.login = props.login;
  }

  componentDidMount() {
    window.fetch('/api/tasks')
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .then((json) => console.log(json))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));

    window.fetch('/api')
      .then((response) => response.json())
      // eslint-disable-next-line no-console
      .then((json) => console.log(json))
      // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }

  render() {
    const { props: { login } } = this;
    this.login = login;
    if (!this.login) {
      return <Redirect to="/" />;
    }
    return (
      <main />
    );
  }
}

Tasks.propTypes = {
  login: PropTypes.bool.isRequired,
};

const structeredSelector = createStructuredSelector({
  login: (state) => state.user.login,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Tasks);
