import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom";

// Import Components

// Import Assets
import '../assets/styles/App.scss';

class Tasks extends Component {
  constructor(props) {
    super(props)
    this.login = props.login
  }

  componentDidMount() {
    window.fetch('/api/tasks')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));

    window.fetch('/api')
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => console.log(error));
  }

  render() {
    this.login = this.props.login
    if(!this.login) {
      return <Redirect to="/users/sign_in" />
    }
    return (
      <main>
        
      </main>
    );
  }
}

Tasks.propTypes = {
  login: PropTypes.bool
};

const structeredSelector = createStructuredSelector({
  login: (state) => state.user.login,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Tasks);
