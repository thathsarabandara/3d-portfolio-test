import React from 'react'
import './underline.css'

function Underline() {
  return (
    <div className='underline'>
        <div className='uper-part'>
            <div className='underlinerectangle'></div>
            <div className='underlinetriangle1'></div>
        </div>
        <div className='middle-part'></div>
        <div className='lower-part'>
            <div className='underlinerectangle'></div>
            <div className='underlinetriangle2'></div>
        </div>
    </div>
  )
}

export default Underline