import React from 'react'
//import ReactHint from 'react-hint';
//import 'react-hint/css/index/css';
import logo from '../logo.svg';
import './Home.css';

const Home = () => (
  <div>
    <h2>Home</h2>
      <div className="home">
        <div className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h2>React Demo</h2>
          <h3>Created by <a href="http://github.com/rdwrcode">rdwrcode</a></h3>
        </div>
        <p className="home-intro">
          <strong>C</strong>ascading{' '}
          <strong>S</strong>tyle{' '}
          <strong>S</strong>heets{' '}
        </p>
        <ul>
          <li className="open">Lorem ipsum</li>
          <li className="closed">Dolor sit</li>
          <li className="closed">Amet consectetuer</li>
          <li className="open">Magna aliquam</li>
          <li className="closed">Autem veleum</li>
        </ul>
        <ol className="info">
          <li>Lorem ipsum</li>
          <li>Dolor sit</li>
          <li>Amet consectetuer</li>
          <li>Magna aliquam</li>
          <li>Autem veleum</li>
        </ol>
        <h4>
          h4 box style
        </h4>
      </div>
  </div>
)

export default Home;
