// cf. https://reactjs.org/docs/hooks-reference.html#useeffect
import React from 'react';

export default function Foobar(props) {
  React.useEffect(() => {
    props.dispatchSomeAction(props.data);
  }, [props.data]);
  return <div>Foobar</div>;
}
