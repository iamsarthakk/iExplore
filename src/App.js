import React, { Component } from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.dom";
import logo from './logo.png';
import './App.css';
import login from './login.svg';
import Chat from './Chat.js';
import Background from './Background.js';

let defaultStyle = {
  color: '#fff'
};

class Options extends Component {
  state = {
    count: 0,
    tags: ['Buyer','Renter','Seller']
  };

  render() {
    return (
      <div style={{...defaultStyle}}>
        <img/>
        <ul className="Option">{this.state.tags.map(tag=><li><a key={tag}>{tag}</a></li>)}</ul>
      </div>
    );
  }
}

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
      <div className="Filter" style={defaultStyle}>
        <img/>
        <input type="text" placeholder="Enter city" />
        <a><i class="fas fa-search"></i></a>
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
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{fontSize:'72px'}} >iExplore </h1>
        <Chat/>
        <Background/>
        <Filter/>
        <Login/>
        <Content/>
        <Options/>
        <p style={{position:'relative',top:90,left:320}}>Chat</p>
      </div>
    );
  }
}

export default App;
