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
  }

  componentDidMount() {
    this.userStatus();
  }

  userStatus(name) {
    const { props: { getUser } } = this;
    getUser(name);
  }

  render() {
    const { props: { user } } = this;
    return (
      <header>
        {user.login ? <LinkButton to="/users/sign_out">Sing Out</LinkButton> : <LinkButton to="/users/sign_up">Sing Up</LinkButton>}
      </header>
    );
  }
}

Header.propTypes = {
  getUser: PropTypes.func.isRequired,
};

const structeredSelector = createStructuredSelector({
  user: (state) => state.user,
});

const mapDispatchToProps = { getUser };

export default connect(structeredSelector, mapDispatchToProps)(Header);
