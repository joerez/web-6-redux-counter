import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCounter, decreaseCounter, incrementByCounter, decrementByCounter, resetCounter } from '../actions';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      incrementForm : 5,
      decrementForm : 5
    }
  }
  // component state amount

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

        <form>
          {/* value should be set by state onchange should update state */}
          <input value={this.state.incrementForm} onChange={(e) => {
            this.setState({incrementForm : Number(e.target.value)})
          }} name="number" />

          <button onClick={(e) => {
            e.preventDefault()
            this.props.incrementByCounter(this.state.incrementForm);
          }}>Up by blank</button>
        </form>


        <form>
          <input value={this.state.decrementForm} onChange={(e) => {
            console.log(Number(e.target.value));
            this.setState({decrementForm : Number(e.target.value)})
          }} name="number2" />

          <button onClick={(e) => {
            e.preventDefault()
            this.props.decrementByCounter(this.state.decrementForm);
          }}>Down by blank</button>
        </form>


      </div>
    );
  }
}

// export default Counter;
const mapStateToProps = (state) => {
  return { counter: state.counter }
}

const mapDispatchToProps = () => {
  return { incrementCounter, decreaseCounter, incrementByCounter, decrementByCounter, resetCounter }
}

// export default connect(mapStateToProps)(Counter);
export default connect(
  mapStateToProps,
  mapDispatchToProps())(Counter);
