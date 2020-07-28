import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// Action
import loadData from '../actions/taskListByCategory';

// Javascript
import GroupData from '../javascript/progress';
import Swipe from '../javascript/swipedEvent';
import ChangeOption from '../javascript/changeOption';

// Styles
import '../assets/styles/progress.scss';

// Images
import workingImg from '../assets/images/working.svg';

// Components
import { ProgressBar, Achivements } from '../components/index';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = { range: 1 };
    this.handlerChanger = this.handlerChanger.bind(this);
  }

  componentDidMount() {
    const { props: { loadData }, state: { range } } = this;
    loadData(range);
    const e = document.getElementById('date-range');
    const swipe = new Swipe(e);
    swipe.onLeft(() => {
      ChangeOption(-1, e);
      e.click();
    });
    swipe.onRight(() => {
      ChangeOption(1, e);
      e.click();
    });
    swipe.run();
  }

  handlerChanger(e) {
    const { props: { loadData } } = this;
    this.setState({ range: e.target.value });
    loadData(e.target.value);
  }

  render() {
    const {
      state: { range },
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
      <div>
        <div className="selection">
          <select name="date" id="date-range" onChange={this.handlerChanger} onClick={this.handlerChanger}>
            <option value="1">Today</option>
            <option value="7">This Week</option>
            <option value="30">This Month</option>
          </select>
        </div>
        <div className="progress">
          {
            working
              ? <ProgressBar percentage={GroupData(working, (10 * range), wExtra)} name="Working" />
              : null
            }
          {
            studing
              ? <ProgressBar percentage={GroupData(studing, (4 * range), sExtra)} name="Studing" />
              : null
          }
          {
            eating
              ? <ProgressBar percentage={GroupData(eating, (2 * range), eExtra)} name="Eating" />
              : null
            }
          {
            sleeping
              ? <ProgressBar percentage={GroupData(sleeping, (8 * range), slExtra)} name="Sleeping" />
              : null
          }
        </div>
        <div className="achivements">
          {
            working
              ? <Achivements time={GroupData(working, (10 * range), wExtra)} name="Working" img={workingImg} />
              : null
          }
        </div>
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
