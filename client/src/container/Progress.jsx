import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// Action
import loadData from '../actions/taskListByCategory';

// Styles
// import '../assets/styles/footer.scss';

// Javascripts
// import Timer from '../javascript/time';

// Components
import { ProgressCircle } from '../components/index';

// Images
import working from '../assets/images/working.svg';
import studing from '../assets/images/studing.svg';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = { currentDate: Date.now() };
  }

  componentDidMount() {
    const { props: { loadData } } = this;
    loadData(this.state.currentDate);
  }

  render() {
    const { props: { taskByCategory } } = this;
    console.log(taskByCategory);
    return (
      <ProgressCircle percentage={60} image={working} />
    );
  }
}

Progress.propTypes = {
  taskByCategory: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.bool, PropTypes.object])).isRequired,
  loadData: PropTypes.func.isRequired,
};

const structeredSelector = createStructuredSelector({
  taskByCategory: (state) => state.taskByCategory,
});

const mapDispatchToProps = {
  loadData,
};

export default connect(structeredSelector, mapDispatchToProps)(Progress);
