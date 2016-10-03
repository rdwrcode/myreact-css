import React from 'react';
import logo from '../logo.jpg';

import './Tach.css';

const Tach = () => (
  <div>
    <h2>Tach</h2>
    <header className='tc pv4 pv5-ns'>
      <img src={logo} className='br-100 pa1 ba b--black-10 h3 w3' alt='avatar' />
      <h1 className='f5 f4-ns fw6 mid-gray'>Jasper Whitehouse</h1>
      <h2 className='f6 gray fw2 ttu tracked'>Los Angeles</h2>
    </header>
    <div className='bg-green bb b--black-10 overflow-hidden ph2 f6'>
      Explanation:

      bg-white:   white background
      bb:         bottom border
      b--black:   black border
      ph2:        horizontal padding: 0.5rem
      f6:         font-size: 0.875rem
    </div>
    <div className='outline tc pv4 f1 w-100 pa2'>
      <div className='f1 w-80 pa2'>
        Title
      </div>
      <button className='f1 w-10 pa2'>B1</button>
      <button className='f1 w-10 pa2'>B2</button>
      <div className='f1 w-90 pa2'>
        Item1
      </div>
      <button className='f1 w-10 pa2'>B</button>
    </div>
  </div>
)

export default Tach;
