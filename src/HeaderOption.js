import { Avatar } from '@mui/material'
import './HeaderOption.css'
import React from 'react'

const HeaderOption = ({avatar,Icon,title}) => {
  return (
    <div className='headeroption'>
        {Icon && <Icon className = 'headeroption-icon'/>}
        {avatar && <Avatar className='headeroption-avatar' src={avatar} />}
        <h3 className='headeroption-title'>{title}</h3>

    </div>
  )
}

export default HeaderOption