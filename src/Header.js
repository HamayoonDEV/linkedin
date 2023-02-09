import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import WorkIcon from '@mui/icons-material/Work';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import me from './images/hamayoon.jpg'

const Header = () => {
  return (
    <div className='header'>
        <div className='left-section'>
            <img alt='linkedin-logo' src='https://cdn-icons-png.flaticon.com/512/174/174857.png' />
            <div className='search-bar'>
                {/**search icon */}
                <SearchIcon style={{color:'gray'}}/>
            <input type='text' placeholder='search' />
            </div>

        </div>
        <div className='right-section'>
            <HeaderOption Icon ={HomeIcon} title = "Home"/>
            <HeaderOption Icon = {GroupIcon} title = "My Network" />
            <HeaderOption Icon={WorkIcon} title = "Jobs" />
            <HeaderOption Icon={SmsIcon} title = "Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications"  />
            <HeaderOption avatar={me} title='Me' />

        </div>
    </div>
  )
}

export default Header