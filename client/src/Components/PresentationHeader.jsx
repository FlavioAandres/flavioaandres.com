import React from 'react'
import './PresentationHeader.css'

const PresentationHeader = (props)=>{
    return (
        <div className="presentation-header-container">
            <div className="namming">
                <h2>FlavioAandres</h2>
                <h4>⭐Web developer</h4>
            </div>
            <div className="social-networks">
                <a className="twitter">Twitter</a>
                <a className="medium">Medium</a>
                <a className="github">Github</a>
                <a className="instagram">Instagram</a>
            </div>
        </div>
    )
}

export default PresentationHeader;