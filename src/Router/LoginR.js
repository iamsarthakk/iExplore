import React, { Component } from 'react';
import './Login.css';
import back from './back.jpg';
import avatar from './avatar.png';

const LoginR = () =>{
  return(
    <div>
      <img className='back' src={back}/>
      <div className="loginbox">
        <img src={avatar} className="avatar"/>
        <h1>Login Here</h1>
        <form>
           <p>Username</p>
           <input type="text" name="" placeholder="Enter Username"/>
           <p>Password</p>
           <input type="password" name="" placeholder="Enter Password"/>
           <input type="submit" name="" value="Login"/>
           <a href="#">Lost your password?</a><br/>
           <a href="#">Don't have an account?</a>
        </form>
      </div>
  </div>
  )
}

export default LoginR;
