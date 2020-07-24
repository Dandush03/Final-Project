import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import getUser from '../actions/user';

import { LinkButton } from '../components';

class Header extends Component {
  constructor(props) {
    super(props);
    this.userStatus = this.userStatus.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.userStatus();
  }

  userStatus(name) {
    const { props: { getUser } } = this;
    getUser(name);
  }

  signOut() {
    const { props: { location } } = this;
    window.location.replace(`${location}users/sign_out`);
  }

  render() {
    const { props: { user } } = this;
    return (
      <header>
        {user.login ? <button type="button" onClick={this.signOut}>Sing Out</button> : <LinkButton to="/users/sign_up">Sing Up</LinkButton>}
      </header>
    );
  }
}

Header.propTypes = {
  getUser: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  user: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.string])).isRequired,
};

const structeredSelector = createStructuredSelector({
  user: (state) => state.user,
  location: (state) => state.location,
});

const mapDispatchToProps = { getUser };

export default connect(structeredSelector, mapDispatchToProps)(Header);
