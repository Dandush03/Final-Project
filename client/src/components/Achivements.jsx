import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

// Styles
import 'react-circular-progressbar/dist/styles.css';

export default function Achivements({ percentage, name }) {
  return (
    <div className="progress-container">
      <CircularProgressbar
        value={percentage}
        maxValue={1}
        text={`${(percentage * 100).toFixed(2)}%`}
        strokeWidth={10}
        className="progress"
      />
      <span>{name}</span>
    </div>
  );
}

Achivements.propTypes = {
  percentage: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
