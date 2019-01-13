import React, { Component } from 'react'
import p5 from 'p5';

class Back extends Component{
  constructor(){
      super();
    this.sketch = new p5(p => {

      var x = 100;
      var y = 100;
      var canvas;

      p.setup = function() {
        canvas = p.createCanvas(200, 200);
        canvas.position(1300,400);
        //canvas.style('z-index',0);
        //<p>Chat</p>
      }

      p.draw = function() {
        p.background(255);
        p.fill(255);
        p.rect(x,y,50,50);
      }
  })
}

render(){
  return null;
}
}


export default Back;
