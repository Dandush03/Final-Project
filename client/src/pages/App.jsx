import React from 'react';
import { Link } from 'react-router-dom'

// Import Components
import {Container, Button} from '../components'

// Import Assets
import logo from '../assets/images/logo.svg';

import '../assets/styles/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Container class="D"></Container>
      <Button as={Link} to='/'>Back to home</Button>
    </div>
  );
}

export default App;
