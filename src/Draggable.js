import React from 'react';
import ReactDOM from 'react-dom';

export default class Draggable extends React.Component {
  state = {
    rel_x:0,
    rel_y:0
  };
  handleMouseDown = (e) => {
    console.log( "mouse down");
    if (e.button !== 0) return;
    const ref = ReactDOM.findDOMNode( this.refs.handle);
    const body = document.body;
    const box = ref.getBoundingClientRect();
    this.setState({
      rel_x: e.pageX - (box.left + body.scrollLeft - body.clientLeft),
      rel_y: e.pageY - (box.top + body.scrollTop - body.clientTop)
    });
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    e.preventDefault();
  };
  handleMouseUp = (e) => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    e.preventDefault();
  };
  handleMouseMove = (e) => {
    this.props.onMove({
      x: e.pageX - this.state.rel_x,
      y: e.pageY - this.state.rel_y
    });
    e.preventDefault();
  };
  render = () => {
    return (
      <div
        onMouseDown={this.handleMouseDown}
        style={{
          position: 'absolute',
          left: this.props.x,
          top: this.props.y
        }}
        ref="handle" >
        {this.props.children}
      </div>
    );
  };
}
