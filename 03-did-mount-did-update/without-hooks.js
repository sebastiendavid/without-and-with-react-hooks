import React from 'react';

export default class Foobar extends React.Component {
  componentDidMount() {
    this.props.dispatchSomeAction(this.props.data);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.props.dispatchSomeAction(this.props.data);
    }
  }

  render() {
    return <div>Foobar</div>;
  }
}
