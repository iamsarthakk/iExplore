import React, { Component } from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.dom";
import logo from './logo.png';
import './App.css';
import login from './login.svg';

let defaultStyle = {
  color: '#fff'
};

class Content extends Component {
  state = {
    count: 0,
    tags: ['Home','About','Contact','News','Download App','Buying-Guide']
  };

  render() {
    return (
      <div style={{...defaultStyle}}>
        <img/>
        <ul>{this.state.tags.map(tag=><li><a key={tag}>{tag}</a></li>)}</ul>
      </div>
    );
  }
}

class Filter extends Component {

  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        <button onClick={()=><p style={{defaultStyle}}>Hey</p>}>Search</button>
      </div>
    );
  }
}

class Login extends Component {

  render() {
    return (
      <div className="Login" style={{...defaultStyle,fontSize:'12px'}}>
        <img src={login} style={{height:20}} />
        <h3 style={{position:'relative',top:-38,left:40}}>
        <a href='#'>Login</a>
        </h3>
      </div>
    );
  }
}


class App extends Component {
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

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{fontSize:'72px'}} >Title </h1>
        <Filter/>
        <Login/>
        <Content/>
        <p style={{position:'relative',top:90,left:620}}>Chat</p>
      </div>
    );
  }
}

export default App;
