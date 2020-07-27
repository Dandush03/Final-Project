/* eslint-disable camelcase */
import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

export default function Task({ data }) {
  const {
    id,
    name,
    description,
    start,
    end,
    hours,
    minutes,
    seconds,
    category_id,
  } = data;
  const categoryArr = ['Work', 'Clean', 'Studies', 'sleep'];
  return (
    <div className="task" name={id}>
      <div className="preview">
        <div className="info">
          <span>{categoryArr[category_id - 1]}</span>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <div className="time">
          <span>{`${hours}:${minutes}:${seconds}`}</span>
        </div>
      </div>
      <div className="more-info">
        <span>{start}</span>
        <span>{end}</span>
      </div>
    </div>
  );
}

Task.propTypes = {
  data: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
