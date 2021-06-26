import React from 'react'

import './StairsLoader.scss'

export default function StairsLoader() {
    return (
        <div className="loader">
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__bar"></div>
            <div className="loader__ball"></div>
        </div>
    )
}
