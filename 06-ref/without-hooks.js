import React from 'react';

export default class Foobar extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  render() {
    return (
      <>
        <button
          onClick={() => this.inputRef.current.focus()}
        >
          focus
        </button>
        <input ref={this.inputRef} />
      </>
    );
  }
}
