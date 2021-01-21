import React from 'react'
import './Item.css'
const Item = ()=>{
    const urlImage = "https://marketing4ecommerce.net/wp-content/uploads/2016/11/shutterstock_94676791-compressor-768x480.jpg"
    return(
        <div className="item-container">
            <div className="thumbnail-image">
                <img src={urlImage} alt="" srcset=""/>
            </div>
            <div className="item-content">
                <div className="item-header">
                    <h3>
                        How I passed the AWS Practicioner Exam
                    </h3>
                        {/* <p>Subtitle of the post...</p> */}
                </div>
                <div className="item-body">
                    <p>Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en
                    en diseño gráfico en en diseño gráfico en </p>
                </div>
            </div>
            <div className="category-line"></div>
        </div>
    )
}

export default Item