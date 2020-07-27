import React, { Component } from 'react';

// Styles
import '../assets/styles/taskForm.scss';

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.state = { statusMsg: null, status: null };
  }

  submitHandler(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const newData = { tasks: {} };
    let validate = true;
    [...data.entries()].forEach((elem) => {
      if (!elem[1] && elem[0] === 'name') {
        validate = false;
      }

      const { tasks } = newData;

      Object.assign(tasks, { [elem[0]]: elem[1] });
    });
    if (!validate) {
      this.setState({ statusMsg: '*Title Field is Mandatory', status: false });
      return;
    }

    const config = {
      method: form.method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(newData),
    };

    fetch(form.action, config)
      .then((response) => {
        window.location.reload(false);
        return response.json();
      })
    // eslint-disable-next-line no-console
      .catch((error) => console.log(error));
  }

  render() {
    const { state: { statusMsg, status } } = this;
    return (
      <div className="task-form">
        <h1>Start a Task Now!</h1>
        <form method="POST" action="/api/tasks" onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="name">
              <input type="text" name="name" placeholder="Title" />
              <span className={`request ${status ? 'good' : 'bad'}`}>{statusMsg || null}</span>
            </label>
          </div>
          <div>
            <label htmlFor="category_id">
              <select name="category_id">
                <option value="1">Working</option>
                <option value="2">Cleaning</option>
                <option value="3">Eating</option>
                <option value="4">Sleeping</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="description">
              <textarea name="description" placeholder="Desciption" rows="5" />
            </label>
          </div>
          <div>
            <button type="submit">Start!</button>
          </div>
        </form>
      </div>
    );
  }
}
