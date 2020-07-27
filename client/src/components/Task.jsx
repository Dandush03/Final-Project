/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes, { oneOfType } from 'prop-types';

export default class Task extends Component {
  constructor(props) {
    super(props);
    this.openHandler = this.openHandler.bind(this);
    this.state = { opened: false };
  }

  openHandler(e) {
    e.stopPropagation();
    const { state: { opened } } = this;
    if (opened) {
      this.setState({ opened: false });
      return;
    }
    this.setState({ opened: true });
  }

  render() {
    const {
      props: {
        data: {
          id,
          name,
          description,
          start,
          end,
          hours,
          minutes,
          seconds,
          category_id,
        },
      },
      state: {
        opened,
      },
    } = this;

    const categoryArr = ['Work', 'Clean', 'Studies', 'sleep'];
    const tempStart = new Date(Date.parse(start)).toTimeString();
    const tempEnd = new Date(Date.parse(end)).toTimeString();
    return (
      <div
        className={`task ${opened ? 'open' : 'close'}`}
        onClick={this.openHandler}
        onKeyDown={this.openHandler}
        role="button"
        tabIndex={0}
        name={id}
      >
        <div className="preview">
          <div className="info">
            <h1>{name}</h1>
            <span>{categoryArr[category_id - 1]}</span>
          </div>
          <div className="time">
            <span>{tempEnd === 'Invalid Date' ? 'Still Running' : `${hours}:${minutes}:${seconds}`}</span>
          </div>
        </div>
        <div className="more-info">
          <div className="time">
            <span className="time-string">
              From:
              <span>{tempStart.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')}</span>
            </span>
            <span className="time-string">
              To:
              <span>{tempEnd === 'Invalid Date' ? 'Still Running' : tempStart.replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1')}</span>
            </span>
          </div>
          <p>
            Description:
            <span>{description}</span>
          </p>
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  data: PropTypes.objectOf(oneOfType([PropTypes.string, PropTypes.number])).isRequired,
};
