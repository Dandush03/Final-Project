import React from 'react';

import { LinkButton } from '../components';

function NotFound() {
  return (
    <div className="App">
      <h1>Error: 401</h1>
      <h2>Page Not Found</h2>
      <LinkButton to="/">Go Back Home</LinkButton>
    </div>
  );
}

export default NotFound;
