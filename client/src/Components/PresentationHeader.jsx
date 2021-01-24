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
                <a href="https://twitter.com/FlavioAandres" className="twitter">🦅Twitter</a>
                <a href="https://flavioaandres.medium.com" className="medium">📖Medium</a>
                <a href="https://github.com/FlavioAandres" className="github">🐙Github</a>
                <a href="https://instagram.com/flavioaandres_"className="instagram">📷Instagram</a>
            </div>
        </div>
    )
}

export default PresentationHeader;