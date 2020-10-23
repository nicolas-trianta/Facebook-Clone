import React from 'react'
import Story from './Story'
import "./StoryReel.css"

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
                profileSrc="https://avatarfiles.alphacoders.com/952/95227.jpg"
                title="Nico"
            />

            <Story
                image="https://cdn.business2community.com/wp-content/uploads/2019/08/airism-338x600.png"
                profileSrc="https://i.pinimg.com/originals/2e/2f/ac/2e2fac9d4a392456e511345021592dd2.jpg"
                title="Trianta"
            />

            <Story
                image="https://images.complex.com/complex/images/w_680/fl_lossy,q_auto/v1/vpefk8qdiin4isyzt8vg/facebook-stories"
                profileSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="Pepito"
            />

             <Story
                image="https://jcsocialmarketing.com/wp-content/uploads/2019/10/How-to-Raise-Money-Using-Facebook-Stories.png"
                profileSrc="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                title="Gayuo"
            />
        </div>
    )
}

export default StoryReel
