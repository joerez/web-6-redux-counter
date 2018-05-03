import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decreaseCounter, resetCounter } from '../actions';

class Counter extends Component {

  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>

        <button onClick={(e) => {
          this.props.incrementCounter();
        }}>Up</button>


        <button onClick={(e) => {
          this.props.decreaseCounter();
        }}>Down</button>

        <button onClick={(e) => {
          this.props.resetCounter();
        }}>Reset</button>



      </div>
    );
  }
}

// export default Counter;
const mapStateToProps = (state) => {
  return { counter: state.counter }
}

const mapDispatchToProps = () => {
  return { incrementCounter, decreaseCounter, resetCounter }
}

// export default connect(mapStateToProps)(Counter);
export default connect(
  mapStateToProps,
  mapDispatchToProps())(Counter);
