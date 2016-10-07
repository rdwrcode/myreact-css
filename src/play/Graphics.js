import React from 'react'
import './Graphics.css'

const Graphics = () => (
  <div className="graphics">
    <svg height="500px" width="1000px">  
      <rect id="myRect" x="0" y="0" height="100px" width="500px" fill="blue"/>
      <rect id="myRect1" x="0" y="100" height="100px" width="400px" />
      <rect id="myRect2" x="0" y="200" height="100px" width="300px" fill="green"/>
      <rect id="myRect3" x="0" y="300" height="100px" width="200px" fill="pink"/> 
      <rect id="myRect4" x="0" y="400" height="100px" width="100px" fill="red"/>
    </svg>
    <svg height="500px" width="1000px">
      <text x="10" y="348">svg</text>
      <rect x="115" y="350" width="86" height="8" fill="blue" rx="12" ry="12"/>
      <rect x="115" y="333" width="86" height="17" rx="12" ry="12" />
      <text x="171" y="345" fontSize="11" fontFamily="Arial" fill="#ffffff">6.1%</text>
    </svg>
  </div>
)

export default Graphics
