import React from 'react';

export default class Foobar extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <button
        onClick={() =>
          this.setState(state => ({
            count: state.count + 1,
          }))
        }
      >
        Increment
      </button>
    );
  }
}
