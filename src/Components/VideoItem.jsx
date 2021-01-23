import React from 'react'
import './Item.css'
const VideoItem = ()=>{
    const urlImage = "https://marketing4ecommerce.net/wp-content/uploads/2016/11/shutterstock_94676791-compressor-768x480.jpg"
    return(
        <a className="item-video-container" >
            <img src={urlImage} alt="" srcset=""/>
        </a>
    )
}

export default VideoItem