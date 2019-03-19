// cf. https://reactjs.org/docs/hooks-reference.html#usestate
import React from 'react';

export default function Foobar() {
  const [count, setCount] = React.useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}
