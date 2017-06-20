import React from 'react';
import Bubble from './Bubble';

export default class Play extends React.Component {
  state = {
    bubble_list: []
  };
  mouse_x = 0;
  mouse_y = 0;
  bubble_key = 0;
  test = (e) => {
    this.mouse_x = e.pageX;
    this.mouse_y = e.pageY;
    const new_key = this.bubble_key++;
    this.setState( {show_bubble: true,
      bubble_list : [...this.state.bubble_list,
        <Bubble key={new_key} top="-50" left={this.mouse_x} onFinished={this.finished} />
      ]});
  };
  finished = () => {
    const nl = this.state.bubble_list.filter( ( item, ndx) => {
      return (ndx !== 0);
    });
    this.setState( {bubble_list: nl});
  };
  render = () => {
    console.log( this.state.bubble_list);
    const style={ position: "relative"};
    return (
      <div>
        <div>
          <button onClick={this.test}>Test</button>
        </div>
        <div style={style}>
          {this.state.bubble_list}
        </div>
      </div>
    );
  };
}
