import React from 'react'
import './Item.css'
const Item = (props)=>{
    const urlImage = props.thumbnail
    return(
        <a href={props.url} className="item-container">
            <div className="thumbnail-image">
                <img src={urlImage} alt="" srcset=""/>
            </div>
            <div className="item-content">
                <div className="item-header">
                    <h3>
                        {props.title}
                    </h3>
                </div>
                <div className="item-body">
                    <p> {props.description.substring(0,105)}... </p>
                </div>
            </div>
            <div className="category-line"></div>
        </a>
    )
}

export default Item