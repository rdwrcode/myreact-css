import React from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Home from './home/Home';
import Basic from './basic/Basic';
//import Tach from './tach/Tach';
import Kanban from './kanban/Kanban';
import Play from './play/Play';
import About from './about/About';
import NotFound from './NotFound';

import './App.css'

const App = () => {
  return (
    <Router>
      <div>
        <ul className="app-navigation">
          <li><Link to='/myreact-css'>Home</Link></li>
          <li><Link to='/myreact-css/basic'>Basic</Link></li> 
          <li><Link to='/myreact-css/kanban'>Kanban</Link></li>
          <li><Link to='/myreact-css/play'>Play</Link></li>
          <li><Link to='/myreact-css/about'>About</Link></li>
        </ul>
        <hr/>
        <Match exactly pattern='/' component={Home}/>
        <Match pattern='/basic' component={Basic}/>
        <Match pattern='/kanban' component={Kanban}/>
        <Match pattern='/play' component={Play}/>
        <Match pattern='/about' component={About}/>
        <Miss component={NotFound}/>
      </div>
    </Router>
  );
}

export default App;
