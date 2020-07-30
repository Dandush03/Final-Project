import React from 'react';
import PropTypes from 'prop-types';

// Javascript
import { timeToString } from '../javascript/time';

// Styles
import '../assets/styles/achivements.scss';

export default function Achivement({
  time, name, goal, img,
}) {
  const timer = timeToString(time);
  return (
    <div className="achivement">
      <img src={img} alt={`${name} Profile`} />
      <div className="progress-container">
        <h3>{name}</h3>
        <p>
          Time Spent:
          <span>{timer}</span>
        </p>
        <p>
          Goal:
          <span>{goal}</span>
          Hours
        </p>
      </div>
    </div>
  );
}

Achivement.propTypes = {
  time: PropTypes.number.isRequired,
  goal: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
