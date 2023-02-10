import './InputOption.css'
import React from 'react'

const InputOption = ({title,Icon,color}) => {
  return (
    <div className='inputoption'>
        <Icon style={{color:color}} />
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption