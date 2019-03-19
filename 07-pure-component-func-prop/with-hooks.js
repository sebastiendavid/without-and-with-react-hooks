// cf. https://reactjs.org/docs/hooks-reference.html#usecallback
import React from 'react';

export const Bar = React.memo((props) => (
  <div onClick={props.onClick} />;
));

export function Foo({ dispatchSomeAction }) {
  const onClick = React.useCallback(() => {
    dispatchSomeAction();
  }, [dispatchSomeAction]);

  return (
    <div>
      <Bar onClick={onClick} />
    </div>
  );
}
