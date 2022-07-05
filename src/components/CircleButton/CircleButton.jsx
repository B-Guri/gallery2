import React from 'react'
import cl from "./CircleButton.module.css"

const CircleButton = ({children, callback, style}) => {
  return (
    <div style={style} className={cl.goup} onClick={callback}>    	
        <p>{children}</p>
    </div>
  )
}

export default CircleButton