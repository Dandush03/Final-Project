import React, { Component } from 'react';

class Tasks extends Component {
  componentDidMount() {
    window.fetch('/api/tasks')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));

      window.fetch('/api')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Tasks;