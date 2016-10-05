import React from 'react'
import Radium from 'radium'
import { style, hover } from 'glamor'
import Flexbox from './Flexbox'
import Nav from './Nav'
import Boxes from './Boxes'
import './Play.css'

const styles = {
  base: {
    background: 'blue',
    border: 0,
    borderRadius: 4,
    color: 'white',
    padding: '1.5em',

    ':hover': {
      backgroundColor: 'red'
    },

    ':focus': {
      backgroundColor: 'green'
    },

    ':active': {
      backgroundColor: 'yellow'
    },
  },

  block: {
    display: 'block',

    ':hover': {
      boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
    }
  },
};

const InlineStyled = () => (
  <div style={{display: 'flex', padding: '2em', backgroundColor: 'cyan'}}>
    <h1 style={{color: 'white', fontFamily: 'monospace'}}>
      Gotta Catch Em All
    </h1>
  </div>
)

const Button = (props) => (
  <button style={styles.base}>
    {props.children}
  </button>
)

const RadiumButton = Radium(Button)

const Play = () => (
  <div className="play">
    <h2 className="play-h2">Play</h2>
    <p className="play-p">Ron is in the <span className="play-spanish play-english">Billigual Education</span> program.</p>
    <div className="play-floating">
      The same effect can be achieved by using the inline-block value of the display property (notice that no clear property is needed).
    </div>
    <InlineStyled />
    <RadiumButton 
      size="large"
      block={true}>
      Cool Button Radium
    </RadiumButton>
    <div {...style({color: 'red'})}
      {...hover({color: '#00FF00'})}>
      glamor style
    </div>
    <Flexbox />
    <Nav />
    <Boxes />
    <div className="container">
      <header>
        <h1>City Gallery</h1>
      </header>
      <nav>
        <ul>
          <li><a href="#">London</a></li>
          <li><a href="#">Paris</a></li>
          <li><a href="#">Tokyo</a></li>
        </ul>
      </nav>

      <article>
        <h1>London</h1>
        <p>London is the capital city of England. It is the most populous city in the  United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
        <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its founding by the Romans, who named it Londinium.</p>
      </article>

      <footer>Copyright © rdwrcode </footer>
    </div>
  </div>
)

export default Play;
