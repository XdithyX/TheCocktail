import React from 'react'
import './Star.css'
const Star = ({children}) => {
  return (
    <div>
        {children}

        <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
    </div>
  )
}

export default Star