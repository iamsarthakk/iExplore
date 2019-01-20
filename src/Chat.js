import React, { Component } from 'react'
import p5 from 'p5';

class Back extends Component{
  constructor(){
      super();
    this.sketch = new p5(p => {

      var x = 0;
      var y = 0;
      var canvas;

      p.setup = function() {
        canvas = p.createCanvas(70, 70);
        canvas.position(1800,850);
        canvas.style('z-index',0);
      //  canvas.style('width',30);

        //<p>Chat</p>
      }

      p.draw = function() {
        p.background(255,0);
        p.noStroke()
        p.fill(231,77,99);
        p.rect(x,y,70,45);
        p.fill(255);
        p.rect(x+7,y+7,56,30);
        p.fill(231,77,99);
        p.ellipse(x+22,y+22,10,10);
        p.ellipse(x+46,y+22,10,10);
        p.rect(x+32,y+45,6,5);
        p.arc(35,75,50,50,p.PI,0);

      }
  })
}

render(){
  return null;
}
}


export default Back;
