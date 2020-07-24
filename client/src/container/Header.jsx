import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { getUser, logOutUser } from '../actions/user';

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
    const { props: { logOutUser } } = this;
    logOutUser();
    alert()
  }

  render() {
    const { props: { user } } = this;
    const { props: { logOutUser } } = this;
    return (
      <header>
        {user.login ? <a href="/" onClick={this.signOut}>Sing Out</a> : <LinkButton to="/users/sign_up">Sing Up</LinkButton>}
      </header>
    );
  }
}

Header.propTypes = {
  getUser: PropTypes.func.isRequired,
  logOutUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.string])).isRequired,
};

const structeredSelector = createStructuredSelector({
  user: (state) => state.user,
});

const mapDispatchToProps = { getUser, logOutUser };

export default connect(structeredSelector, mapDispatchToProps)(Header);
