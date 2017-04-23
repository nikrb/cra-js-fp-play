import React from 'react';
import CarEngine from './CarEngine';

export default class Car extends React.Component {
  render = () => {
    return (
      <div>
        <p>Car: {this.props.data.name}</p>
        <CarEngine data={this.props.data}/>
      </div>
    );
  };
}
