import React from 'react'
import './styles/Tooltip.css'

const Tooltip = ({children, txt}) => {
    return (
        <div className='tooltip'>
        <span className='tooltiptext'>{children}</span>{txt}:
      </div>
    )
  }

export default Tooltip
