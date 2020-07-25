import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// Action
import { searchTask } from '../actions/task';

// Styles
import '../assets/styles/taskPopUp.scss';

// Images

class TaskPopUp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { props: { searchTask, task } } = this;
    searchTask();
  }

  render() {
    console.log(this.props.task);
    return (
      <div className="new-task">
        test
      </div>
    );
  }
}

TaskPopUp.propTypes = {
  task: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.object])).isRequired,
};

const structeredSelector = createStructuredSelector({
  task: (state) => state.task,
});

const mapDispatchToProps = { searchTask };

export default connect(structeredSelector, mapDispatchToProps)(TaskPopUp);
