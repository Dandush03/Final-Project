import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Action
import getUser from '../actions/user';
import { searchTask, openPopUp, closePopUp } from '../actions/task';

// Styles
import '../assets/styles/footer.scss';

// Javascripts
import Timer from '../javascript/time';

// Components
import { TaskPopUp } from '../components/index';

// Images
import addTaskImg from '../assets/images/add.svg';
import trackTasksImg from '../assets/images/track.svg';
import heroProgresImg from '../assets/images/progress.svg';
import heroSession from '../assets/images/user.svg';
import StopImg from '../assets/images/stop.svg';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { time: '' };
    this.signOut = this.signOut.bind(this);
    this.popUp = this.popUp.bind(this);
    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    const { props: { getUser, searchTask }, timer } = this;
    getUser();
    searchTask();
    this.sec = setInterval(() => {
      timer();
    }, 1000);
  }

  signOut() {
    const { props: { location } } = this;
    window.location.replace(`${location}users/sign_out`);
  }

  popUp() {
    const { props: { openPopUp, closePopUp, task } } = this;
    if (task.taskPop) {
      return closePopUp();
    }
    return openPopUp();
  }

  timer() {
    const { props: { task: { current } } } = this;
    if (current) {
      this.setState({
        time: Timer(current.start),
      });
    }
  }

  render() {
    const { props: { task }, state: { time } } = this;
    return (
      <footer>
        <button type="button" onClick={this.popUp} className={task.active ? 'warning' : ''}>
          {task.active ? <span className={task.taskPop ? 'open' : ''}>{task.taskPop ? <img src={StopImg} alt="Add Tasks" /> : time}</span> : <img src={addTaskImg} alt="Add Tasks" /> }
        </button>
        {task.taskPop ? <TaskPopUp timer={time} task={task.current} tick={this.sec} /> : null}
        <NavLink exact to="/tasks" activeClassName="selected">
          <img src={trackTasksImg} alt="Track Your Task" />
        </NavLink>
        <NavLink exact to="/" activeClassName="selected">
          <img src={heroProgresImg} alt="Your Progress" />
        </NavLink>
        <button type="button" onClick={this.signOut}>
          <img src={heroSession} alt="Your Progress" />
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  location: PropTypes.string.isRequired,
  getUser: PropTypes.func.isRequired,
  openPopUp: PropTypes.func.isRequired,
  closePopUp: PropTypes.func.isRequired,
  searchTask: PropTypes.func.isRequired,
  task: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.object])).isRequired,
};

const structeredSelector = createStructuredSelector({
  location: (state) => state.location,
  task: (state) => state.task,
});

const mapDispatchToProps = {
  getUser, searchTask, openPopUp, closePopUp,
};

export default connect(structeredSelector, mapDispatchToProps)(Footer);
