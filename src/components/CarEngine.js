import React from 'react';

export default class Car extends React.Component {
  render = () => {
    return (
      <div>
        <p>Engine: {this.props.data.engine}</p>
      </div>
    );
  };
}
