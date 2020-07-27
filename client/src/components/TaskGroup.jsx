/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

export default function TasksGroup({ data, date }) {
  const Tasks = data.map((t) => <Task data={t} key={`Task-${t.id}`} />);
  return (
    <div className="task-group">
      <h2>{date}</h2>
      {Tasks}
    </div>
  );
}

TasksGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  date: PropTypes.string.isRequired,
};
