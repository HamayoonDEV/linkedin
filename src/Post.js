import { Avatar } from '@mui/material'
import './Post.css'
import React from 'react'
import InputOption from './InputOption'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import RepeatIcon from '@mui/icons-material/Repeat';
import SendIcon from '@mui/icons-material/Send';

const Post = ({name,description,message,photoUrl}) => {
  return (
    <div className='post'>
        <div className='post-header'>
            <Avatar src={photoUrl} />
            <div className='post-info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    <div className='post-body'>
        <p>{message}</p>
    </div>
    <div className='post-buttons'>
        <InputOption Icon={ThumbUpIcon} title='Like' color='gray'/>
        <InputOption Icon={CommentIcon} title='Comment' color='gray'/>
        <InputOption Icon={RepeatIcon} title='Repost' color='gray'/>
        <InputOption Icon={SendIcon} title='Send' color='gray'/>

    </div>
    </div>
  )
}

export default Post