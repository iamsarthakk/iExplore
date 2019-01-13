import React, { Component } from 'react'
import p5 from 'p5';

class Background extends Component{
  constructor(){
    super();
    this.back = new p5(p => {

      let angle = 0;
      let w = 24;
      var canvas;
      let ma;
      let maxD;

      p.setup = function() {
        canvas = p.createCanvas(p.windowWidth, p.windowHeight,p.WEBGL);
        canvas.position(0,0);
        canvas.style('z-index',-1);
        ma = p.atan(p.cos(p.QUARTER_PI))
        maxD = p.dist(0, 0, 200, 200);
      }

      p.draw = function() {

        p.background(100);
        p.ortho(-1000, 1000, 1000, -1000, 0, 1000);

        p.rotateX(ma);
        p.rotateY(-p.QUARTER_PI)﻿
        for (let z = 0; z < 500; z += w) {
          for (let x = 0; x < 500; x += w) {

           p.push();
           let d = p.dist(x, z, 250, 250);
           let offset = p.map(d, 0, maxD, -p.PI, p.PI);
           let a = angle + offset;
           let h = p.floor(p.map(p.sin(a), -1, 1, 100, 300));
           p.translate(x - 250, 0, z - 250);
           p.normalMaterial();
           p.box(w, h, w);
          // p.rect(x - p.width / 2 + w / 2, 0, w - 2, h);
           p.pop();
      }
    }

    angle -= 0.1;
      }
    })
  }
  render(){
    return null;
  }
}


export default Background;
