import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import TodayIcon from '@mui/icons-material/Today';
import NotesIcon from '@mui/icons-material/Notes';
import InputOption from './InputOption'
import Post from './Post';
import me from './images/hamayoon.jpg'
import { db } from './firebase';

const Feed = () => {
    const [posts,setPosts] =useState([]);
    const [input,setInput] = useState('');

    
        useEffect(()=>{
            db.collection('posts').onSnapshot(snapshot=>(
                setPosts(snapshot.docs.map(doc=>(
                    {
                        id:doc.id,
                        data:doc.data()
                    }
                )))
            ))
        },[]);
        const SendPost = (e)=>{
            e.prevantDefault();
            db.collection('posts').add({
                name:'hamayon',
                description:'this is my post',
                message:input,
                photoUrl:'',
               
            })
    

    }
  return (
    <div className='feed'>
        <div className='feed-inputcontainer' >
            <div className='feed-input'>
                <CreateIcon/>
                <form>
                    <input onChange={e=>setInput(e.target.value)} value={input} type='text'/>
                    <button onClick={SendPost} type='submit' >Send</button>
                </form>
            </div>
            <div className='feed-inputoption'>
                <InputOption Icon={ImageIcon} title='Photo' color='#0a66e2'/>
                <InputOption Icon={SmartDisplayIcon} title='Video' color='lightgreen'/>
                <InputOption Icon={TodayIcon} title='Event' color='#c37d16'/>
                <InputOption Icon={NotesIcon} title='Write article' color='#e16745'/>
            </div>
            
        </div>
        <div className='post'>

                {/**post */}
                {posts.map((post)=>(
                    <Post/>
                ))}
                <Post name='Hamayoon' description='this is me' message='Never give up' photoUrl={me}/>
            </div>
    </div>
  )
}

export default Feed