import React from 'react';
import Page from './Page';
import Card from './Card';
//import ReactHint from 'react-hint';

import './Basic.css';

class Basic extends React.Component { 
  render() {
    return (
      <div>
        <h2>Basic</h2>
          <div className="basic">
            <div className="basic-header">
              <p>Try layout with HTML and CSS</p>
              <h3>Test h3 header</h3>
            </div>
            <div className="basic-simple">
              basic-simple
            </div>
            <div className="basic-fancy">
              basic-fancy
            </div>
            <div className="static">
              static
            </div>
            <div className="relative1">
              relative1
            </div>
            <div className="relative2">
              relative2
            </div>
            <div className="fixed">
              fixed
            </div>
            <div className="absolute">
              absolute
            </div>
            <div className="relative">
              relative
            </div>
          </div>
          <Page />
          <button data-rh="react Hint">Top</button>
          <Card />
          <Card />
          <Card />
          <Card />
      </div>
    );
  }
};

export default Basic;
