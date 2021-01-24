import React from 'react'
import './Item.css'
const VideoItem = (props)=>{
    const urlImage = props.thumbnail
    return(
        <a href={props.url} className="item-video-container" >
            <img src={urlImage} alt="" srcset=""/>
        </a>
    )
}

export default VideoItem