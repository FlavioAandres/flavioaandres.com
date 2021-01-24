import React from 'react'
import Item from "../Components/PostItem";
import VideoItem from "../Components/VideoItem";

const ContainerPosts = ({hiddenVideo, hiddenBlogs, posts, videos, contentType, handleContentType})=>{

    let ContentElement = null
    
    if(contentType === 'video')
        ContentElement = ( 
            <div
              className={`content-videos ${hiddenVideo ? "hidden-content" : ""}`}
            >
                { videos.map(video=>(<VideoItem {...video} key={video._id} />)) }
            </div>
        )
    if(contentType === 'posts')
        ContentElement = (
            <div
              className={`content-blogs ${hiddenBlogs ? "hidden-content" : ""}`}
            >
                {
                    posts.map((pub, idx) => (
                        <Item key={pub._id + idx} {...pub} />
                    ))
                }
            </div>
        )
    
    const ChooseTypeElement = (
        <div className="content-type-container">
          <button
            onClick={() => handleContentType("posts")}
            className={contentType === "posts" && "selected"}
          >
            Posts
          </button>
          <button
            onClick={() => handleContentType("video")}
            className={contentType === "video" && "selected"}
          >
            Videos
          </button>
        </div>
    ) 
    return (
        <React.Fragment>
            {ChooseTypeElement}
            {ContentElement}
        </React.Fragment>
    )
}

export default ContainerPosts
                