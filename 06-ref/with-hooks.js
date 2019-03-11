import React from 'react';

export default function Foobar() {
  const inputRef = React.useRef();
  return (
    <>
      <button onClick={() => this.inputRef.current.focus()}>
        focus
      </button>
      <input ref={this.inputRef} />
    </>
  );
}
