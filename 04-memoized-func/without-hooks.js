import React from 'react';
import memoize from 'lodash.memoize';

export default class Foobar extends React.Component {
  sortList = memoize((list) => (
    [...list].sort((a, b) => a.label.localeCompare(b.label));
  ))

  render() {
    return (
      <div>
        {this.sortList(this.props.list).map(item => (
          <div key={item.id}>{item.label}</div>
        ))}
      </div>
    );
  }
}
