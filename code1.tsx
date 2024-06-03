import React, { Component } from 'react';

// Define the state interface
interface CounterState {
  count: number;
}

// (Optional) Define the props interface if there are props
// interface CounterProps {}

// Add type annotations to the class component
class Counter extends Component<{}, CounterState> {
  // Initialize the state with type annotation
  state: CounterState = {
    count: 0,
  };

  // Add type annotation for the increment method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
