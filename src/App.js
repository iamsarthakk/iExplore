import React, { Component } from 'react';
import p5 from 'p5';
import "p5/lib/addons/p5.dom";
import menu from './menu.png';
import './App.css';
import login from './login.svg';
import Chat from './Chat.js';
import Background from './Background.js';
import Real from './real-estate.jpg';

class Options extends Component {
  state = {

    tags: ['Buyer','Renter','Seller']
  };

  render() {
    return (
      <div>
        <ul className="Option">{this.state.tags.map(tag=><li><a key={tag} href="#">{tag}</a></li>)}</ul>
      </div>
    );
  }
}

class Content extends Component {
  state = {
    tags: ['Home','About','Contact','News','Download App','Buying-Guide']
  };

  render() {
    return (
      <div className="Content">
        <img/>
        <ul>{this.state.tags.map(tag=><li><a key={tag} href="#">{tag}</a></li>)}</ul>
      </div>
    );
  }
}

class Filter extends Component {

  render() {
    return (
      <div className="Filter">
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
      <div className="Login" style={{fontSize:'100%'}}>
        <img src={login} style={{height:20}} />
        <h3>
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
        <header>
          <div id="header-inner">
            <h1><a href="#" style={{textDecoration:'none', color:'white'}}>iExplore </a></h1>
            <nav>
                <a href="#" id="menu-icon"><img src={menu}/></a>
                <Content/>
                <Login/>
            </nav>
          </div>
        </header>
        {/*<Chat/>
        ()<Background/>*/}

        <section id="option">
          <div>
            <Filter/>
                <h2>Who Are You?</h2>
            <Options/>
          </div>
        </section>
      {/*  <p>Chat</p>*/}
      </div>
    );
  }
}

export default App;
