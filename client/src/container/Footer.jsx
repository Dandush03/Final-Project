import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// Styles
import '../assets/styles/footer.scss';

// Components
import { LinkButton } from '../components';

// Images
import addTaskImg from '../assets/images/add.svg';
import trackTasksImg from '../assets/images/track.svg';
import heroProgresImg from '../assets/images/progress.svg';
import heroSession from '../assets/images/user.svg';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this);
  }

  signOut() {
    const { props: { location } } = this;
    window.location.replace(`${location}users/sign_out`);
  }

  render() {
    return (
      <footer>
        <button type="button">
          <img src={addTaskImg} alt="Add Tasks" />
        </button>
        <LinkButton to="/tasks">
          <img src={trackTasksImg} alt="Track Your Task" />
        </LinkButton>
        <LinkButton to="/">
          <img src={heroProgresImg} alt="Your Progress" />
        </LinkButton>
        <button type="button" onClick={this.signOut}>
          <img src={heroSession} alt="Your Progress" />
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  location: PropTypes.string.isRequired,
};

const structeredSelector = createStructuredSelector({
  location: (state) => state.location,
});

const mapDispatchToProps = { };

export default connect(structeredSelector, mapDispatchToProps)(Footer);
