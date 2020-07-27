/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default class TasksGroup extends Component {
  constructor(props) {
    super(props);
    this.state = { opened: false };
    this.openedHandler = this.openedHandler.bind(this);
  }

  componentDidMount() {
    const { props: { date } } = this;
    const currentDate = new Date(Date.now()).toDateString();
    if (date === currentDate) {
      this.openedHandler();
    }
  }

  openedHandler() {
    const { state: { opened } } = this;
    if (opened) {
      this.setState({ opened: false });
      return;
    }
    this.setState({ opened: true });
  }

  render() {
    const { props: { data, date }, state: { opened } } = this;
    const Tasks = data.map((t) => <Task data={t} key={`Task-${t.id}`} />);
    return (
      <div
        className={`task-group ${opened ? 'open' : 'close'}`}
        onClick={this.openedHandler}
        onKeyDown={this.openedHandler}
        role="button"
        tabIndex={0}
      >
        <h2>{date}</h2>
        {Tasks}
      </div>
    );
  }
}

TasksGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
};
