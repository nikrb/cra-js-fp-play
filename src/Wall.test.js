// import React from 'react';
// import ReactDOM from 'react-dom';
import {Wall} from './Wall';

describe( "creates wall", () => {
  it( 'creates a wall section', () => {
    const wall = Wall();
    console.log( "wall name:", wall.getColour());
    expect( wall.getColour()).toEqual( "black");
  });
});
