import React from 'react';

export default function Foobar(props) {
  const list = React.useMemo(
    () =>
      [...props.list].sort((a, b) =>
        a.label.localeCompare(b.label)
      ),
    [props.list]
  );
  return (
    <div>
      {list.map(item => (
        <div key={item.id}>{item.label}</div>
      ))}
    </div>
  );
}
