import React from 'react';

export default class Bubble extends React.Component {
  state = {
    move_it : false
  }
  componentDidMount = () => {
    window.setTimeout( this.move_it, 100);
  };
  move_it = () => {
    this.setState( { move_it : true});
  };
  finish = () => {
    this.props.onFinished();
  };
  render = () => {
    const box = {
      position: "relative",
      backgroundColor: "#4a4",
      width:"3em",
      opacity: 1,
      top: "0px",
      left: this.props.left+"px",
      transition: "1.0s"
      // animation: "vertical_anim 1s forwards"
    }
    let style={...box};
    if( this.state.move_it){
      style.top = "-100px";
      style.opacity = 0;
    }
    return (
      <div style={style} onTransitionEnd={this.finish} >
        bubble
      </div>
    );
  };
}
