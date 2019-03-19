// cf. https://reactjs.org/docs/hooks-reference.html#useeffect
import React from 'react';

export default function Foobar() {
  React.useEffect(() => {
    const interval = setInterval(() => {
      this.props.dispatchSomeAction();
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>Foobar</div>;
}
