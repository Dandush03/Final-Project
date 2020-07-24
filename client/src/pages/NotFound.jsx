import React from 'react';

import { LinkButton } from '../components';

function NotFound() {
  return (
    <main>
      <h1>Error: 401</h1>
      <h2>Page Not Found</h2>
      <LinkButton to="/">Go Back Home</LinkButton>
    </main>
  );
}

export default NotFound;
