import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

import 'react-circular-progressbar/dist/styles.css';

// Styles
// import '../assets/styles/header.scss';

export default function Progress({ percentage, image }) {
  return (
    <div>
      <CircularProgressbarWithChildren value={percentage} maxValue={100} text={`${percentage}%`} strokeWidth={10}>
        <img src={image} alt="sdasd" />
      </CircularProgressbarWithChildren>
    </div>
  );
}

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
