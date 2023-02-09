import { Avatar } from '@mui/material'
import './Sidebar.css'
import React from 'react'

const Sidebar = () =>{
    const recent = (topic)=>(
        <div className='recent' >
               <span className='recent-hash' ># </span>
               <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className='sidebar-top'>
            <img alt='sidebar' src='https://academy.avast.com/hubfs/New_Avast_Academy/Hackers/Hacker-Thumb-a1.png' />
            <Avatar className='sidebar-avatar'/>
            <h2>Hamayoon</h2>
            <h4>Software Engineer</h4>
        </div>
        <div className='sidebar-stats' >
            <div className='sidebar-stat'>
                <p>Who viewed you</p>
                <p className='sidebar-statnumber'>2500</p>

            </div>
            <div className='sidebar-stat' >
                <p>Views on post</p>
                <p className='sidebar-statnumber'>3000</p>
            </div>
        </div>
        <div className='sidebar-bottom'>
            <p>Recent</p>
            {recent("Hamayoon zindabad")}
            {recent("hi")}
            {recent("hi")}
            {recent("hi")}
            {recent("hi")}
            {recent("hi")}
        </div>
         </div>
  )
}

export default Sidebar