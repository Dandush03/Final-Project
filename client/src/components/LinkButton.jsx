import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function LinkButton({ to, children }) {
  return (
    <Link to={to}>{children}</Link>
  );
}

export default LinkButton;

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
