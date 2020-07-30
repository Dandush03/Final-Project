import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

// Action
import getUser from '../actions/user';
import {
  searchTask, openPopUp, closePopUp, startTimer,
} from '../actions/task';

// Styles
import '../assets/styles/footer.scss';

// Javascripts
import { timeToString } from '../javascript/time';

// Components
import { TaskStopForm, TaskForm } from '../components/index';

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
    this.cronometer = this.cronometer.bind(this);
  }

  componentDidMount() {
    const { props: { getUser, searchTask }, cronometer } = this;
    getUser();
    searchTask();
    this.sec = setInterval(() => {
      cronometer();
    }, 1000);
  }

  signOut() {
    const { props: { location } } = this;
    window.location.replace(`${location}/users/sign_out`);
  }

  popUp() {
    const { props: { openPopUp, closePopUp, task } } = this;
    if (task.taskPop) {
      return closePopUp();
    }
    return openPopUp();
  }

  cronometer() {
    const { props: { task: { current }, startTimer, timer } } = this;
    if (current) {
      this.setState({
        time: timeToString(timer.timer),
      });
      startTimer(current.start, current.category_id);
    }
  }

  render() {
    const { props: { task }, state: { time } } = this;
    return (
      <footer>
        <button type="button" onClick={this.popUp} className={task.active ? 'warning' : ''}>
          {task.active ? <span className={task.taskPop ? 'open' : ''}>{task.taskPop ? <img src={StopImg} alt="Add Tasks" /> : time}</span> : <img src={addTaskImg} alt="Add Tasks" /> }
        </button>
        {task.taskPop && task.active ? <TaskStopForm timer={time} task={task.current} /> : null}
        {task.taskPop && !task.active ? <TaskForm /> : null}
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
  startTimer: PropTypes.func.isRequired,
  task: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.object])).isRequired,
  timer: PropTypes.objectOf(PropTypes.number).isRequired,
};

const structeredSelector = createStructuredSelector({
  location: (state) => state.location,
  task: (state) => state.task,
  timer: (state) => state.timer,
});

const mapDispatchToProps = {
  getUser, searchTask, openPopUp, closePopUp, startTimer,
};

export default connect(structeredSelector, mapDispatchToProps)(Footer);
