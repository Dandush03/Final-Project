import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Javascript
import GroupTask from '../javascript/groupTaskByDate';

// Styles
import '../assets/styles/tasksList.scss';

// Import Components
import TaskGroup from './TaskGroup';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = { statusMsg: null, status: null };
  }

  render() {
    const { props: { data } } = this;
    const GroupData = GroupTask(data);
    const container = [];
    Object.keys(GroupData).forEach((keys) => {
      container.push(<TaskGroup data={GroupData[keys]} date={keys} key={`date-${keys}`} />);
    });
    // const Tasks = data.map((t) => <Task data={t} key={`Task-${t.id}`} />);
    return (
      <div className="tasks-list">
        {container}
      </div>
    );
  }
}

TaskForm.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
