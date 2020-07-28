import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// Action
import loadData from '../actions/taskListByCategory';

// Javascript
import GroupData from '../javascript/progress';

// Styles
import '../assets/styles/progress.scss';

// Javascripts
// import Timer from '../javascript/time';

// Components
import { ProgressBar } from '../components/index';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = { range: 1 };
  }

  componentDidMount() {
    const { props: { loadData }, state: { range } } = this;
    loadData(range);
  }

  render() {
    const {
      props: {
        taskByCategory: {
          working, studing, eating, sleeping,
        }, timer,
      },
    } = this;
    const wExtra = timer.category === 1 ? timer.timer : 0;
    const sExtra = timer.category === 2 ? timer.timer : 0;
    const eExtra = timer.category === 3 ? timer.timer : 0;
    const slExtra = timer.category === 4 ? timer.timer : 0;
    return (
      <div className="progress">
        {working ? <ProgressBar percentage={GroupData(working, 10, wExtra)} name="Working" /> : null}
        {studing ? <ProgressBar percentage={GroupData(studing, 4, sExtra)} name="Studing" /> : null}
        {eating ? <ProgressBar percentage={GroupData(eating, 2, eExtra)} name="Eating" /> : null}
        {sleeping ? <ProgressBar percentage={GroupData(sleeping, 8, slExtra)} name="Sleeping" /> : null}
      </div>
    );
  }
}

Progress.propTypes = {
  taskByCategory: PropTypes.objectOf(PropTypes.array).isRequired,
  timer: PropTypes.objectOf(PropTypes.number).isRequired,
  loadData: PropTypes.func.isRequired,
};

const structeredSelector = createStructuredSelector({
  taskByCategory: (state) => state.taskByCategory,
  timer: (state) => state.timer,
});

const mapDispatchToProps = {
  loadData,
};

export default connect(structeredSelector, mapDispatchToProps)(Progress);
