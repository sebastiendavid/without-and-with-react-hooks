import React from 'react';

export class Bar extends React.PureComponent {
  render() {
    return <div onClick={this.props.onClick} />;
  }
}

export class Foo extends React.Component {
  onClick = () => {
    this.props.dispatchSomeAction();
  };

  render() {
    return (
      <div>
        <Bar onClick={this.onClick} />
      </div>
    );
  }
}
