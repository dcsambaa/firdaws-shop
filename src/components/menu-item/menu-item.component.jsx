import React from 'react'

import './menu-item.styles.scss'

export const MenuItem = ({ title }) => {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="title"> {title} </h1>
                <span className="subtitle">ACHETER</span>
            </div>
        </div>
    )
}

