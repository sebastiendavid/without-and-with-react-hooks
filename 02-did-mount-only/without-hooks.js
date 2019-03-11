import React from 'react';

export default class Foobar extends React.Component {
  componentDidMount() {
    this.props.dispatchSomeAction();
  }

  render() {
    return <div>Foobar</div>;
  }
}
