import React from 'react';

export default class Foobar extends React.Component {
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.dispatchSomeAction();
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>Foobar</div>;
  }
}
