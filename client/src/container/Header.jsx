import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import getUser from '../actions/user';

class Header extends Component {
  constructor(props) {
    super(props);
    this.userStatus = this.userStatus.bind(this);
  }

  componentWillMount() {
    this.userStatus();
  }

  userStatus(name) {
    const { props: { getUser } } = this;
    getUser(name);
  }

  render() {
    return (
      <div >
        test
      </div>
    );
  }
}

Header.propTypes = {
  getUser: PropTypes.func.isRequired,
};

const structeredSelector = createStructuredSelector({
  user: state => state.user,
});

const mapDispatchToProps = { getUser };

export default connect(structeredSelector, mapDispatchToProps)(Header);
