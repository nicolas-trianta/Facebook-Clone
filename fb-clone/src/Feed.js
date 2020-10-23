import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
                profilePic ="https://avatarfiles.alphacoders.com/952/95227.jpg"
                message = "Message goes here"
                timestamp = "This is a timestamp"
                username = "Sample username"
                image = "https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
            />
            <Post 
                // key ={id}
                // profilePic={profilePic}
                // message={message}
                // timestamp = {timestamp}
                // username = {username}
                // image = {image}
            />
            <Post />
        </div>
    )
}

export default Feed
